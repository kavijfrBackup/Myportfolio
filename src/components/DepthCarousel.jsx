/*
 * Adapted from React Bits — Depth Carousel
 * https://github.com/DavidHDev/react-bits
 * License: MIT + Commons Clause. See public/licenses/react-bits.txt.
 */

'use client';

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import './DepthCarousel.css';

const DEFAULT_ITEMS = [];

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeItem = it => (typeof it === 'string' ? { image: it, alt: '' } : it);

const DepthCarousel = ({
  items = DEFAULT_ITEMS,
  cardWidth = 300,
  cardHeight = 380,
  radius = 18,
  tint = '#05060a',
  depth = 220,
  spread = 90,
  tilt = 22,
  tiltDirection = 'right',
  perspective = 1400,
  visibleCards = 4,
  falloff = 0.2,
  blur = 6,
  duration = 700,
  ease = 'power3.out',
  autoplay = false,
  autoplayDelay = 3200,
  loop = true,
  showControls = true,
  showIndicators = true,
  onChange,
  ariaLabel = "Depth carousel",
  className = ''
}) => {
  const data = useMemo(() => (Array.isArray(items) ? items : []).map(normalizeItem), [items]);
  const count = data.length;

  const rootRef = useRef(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);

  const posRef = useRef(0);
  const focusRef = useRef(0);
  const tweenRef = useRef(null);
  const scaleRef = useRef(1);
  const cfgRef = useRef({});
  const onChangeRef = useRef(onChange);

  const dragRef = useRef(null);
  const suppressClickRef = useRef(false);
  const wheelTimerRef = useRef(null);
  const autoTimerRef = useRef(null);
  const reducedRef = useRef(false);

  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    onChangeRef.current = onChange;
    cfgRef.current = {
      count,
      depth,
      spread,
      tilt,
      tiltDirection,
      visibleCards,
      falloff,
      blur,
      duration,
      ease,
      loop,
      cardWidth,
      autoplayDelay
    };
  }, [onChange, count, depth, spread, tilt, tiltDirection, visibleCards, falloff, blur, duration, ease, loop, cardWidth, autoplayDelay]);

  const layout = useCallback(pos => {
    const cfg = cfgRef.current;
    const n = cfg.count;
    if (!n) return;
    const dir = cfg.tiltDirection === 'left' ? -1 : 1;
    const sc = scaleRef.current;

    for (let i = 0; i < n; i++) {
      const el = cardRefs.current[i];
      if (!el) continue;

      let d = i - pos;
      if (cfg.loop && n > 1) {
        d = ((d % n) + n) % n;
        if (d > n / 2) d -= n;
      }

      const back = Math.max(0, d);
      const az = Math.abs(d);
      const shown = az <= cfg.visibleCards + 0.5;

      const tz = -cfg.depth * d;
      const tx = dir * cfg.spread * d;
      const ry = dir * cfg.tilt * clamp(d, 0, 1);

      let opacity = d < 0 ? Math.max(0, 1 + d) : 1;
      if (!shown) opacity = 0;

      const brightness = Math.max(0.15, 1 - back * cfg.falloff);
      const blurPx = cfg.blur > 0 ? Math.min(cfg.blur, (back / Math.max(1, cfg.visibleCards)) * cfg.blur) : 0;
      const zi = Math.round(2000 - d * 20);

      el.style.transform = `translate(-50%, -50%) scale(${sc}) translateX(${tx.toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${ry.toFixed(3)}deg)`;
      el.style.opacity = opacity.toFixed(3);
      el.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blurPx.toFixed(2)}px)`;
      el.style.zIndex = String(zi);
      el.style.pointerEvents = shown && opacity > 0.05 ? 'auto' : 'none';

      const ov = overlayRefs.current[i];
      if (ov) ov.style.opacity = clamp(back * cfg.falloff * 1.25, 0, 0.86).toFixed(3);
    }
  }, []);

  const notify = useCallback(
    idx => {
      setActive(idx);
      onChangeRef.current?.(idx, data[idx]);
    },
    [data]
  );

  const tweenTo = useCallback(
    (target, animate) => {
      tweenRef.current?.kill();
      const cfg = cfgRef.current;
      const n = cfg.count;
      const finalPosition = cfg.loop && n > 0 ? ((target % n) + n) % n : target;
      if (!animate || reducedRef.current || cfg.duration === 0) {
        posRef.current = finalPosition;
        layout(finalPosition);
        return;
      }
      const proxy = { p: posRef.current };
      tweenRef.current = gsap.to(proxy, {
        p: target,
        duration: cfg.duration / 1000,
        ease: cfg.ease,
        onUpdate: () => {
          posRef.current = proxy.p;
          layout(proxy.p);
        },
        onComplete: () => {
          posRef.current = finalPosition;
          layout(finalPosition);
        }
      });
    },
    [layout]
  );

  const setFocus = useCallback(
    (rawIndex, animate = true) => {
      const cfg = cfgRef.current;
      const n = cfg.count;
      if (!n) return;
      clearTimeout(wheelTimerRef.current);
      const idx = cfg.loop ? ((rawIndex % n) + n) % n : clamp(rawIndex, 0, n - 1);
      let delta = idx - posRef.current;
      if (cfg.loop && n > 1) {
        delta = ((delta % n) + n) % n;
        if (delta > n / 2) delta -= n;
      }
      tweenTo(posRef.current + delta, animate);
      if (idx !== focusRef.current) {
        focusRef.current = idx;
        notify(idx);
      }
    },
    [tweenTo, notify]
  );

  const navigateBy = useCallback(step => setFocus(focusRef.current + step, true), [setFocus]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const resize = width => {
      const needed = cardWidth + Math.abs(spread) * 2 + 120;
      scaleRef.current = Math.min(width / needed, 1);
      root.style.setProperty('--dc-scaled-height', `${cardHeight * scaleRef.current}px`);
      layout(posRef.current);
    };
    resize(root.clientWidth);
    const observer = new ResizeObserver(([entry]) => resize(entry.contentRect.width));
    observer.observe(root);
    return () => observer.disconnect();
  }, [layout, cardWidth, cardHeight, spread]);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      reducedRef.current = motionPreference.matches;
      if (motionPreference.matches) setFocus(focusRef.current, false);
    };
    sync();
    motionPreference.addEventListener('change', sync);
    return () => motionPreference.removeEventListener('change', sync);
  }, [setFocus]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onWheel = e => {
      const cfg = cfgRef.current;
      if (cfg.count < 2 || e.ctrlKey || !e.cancelable || Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      tweenRef.current?.kill();
      const delta = e.deltaMode === 1 ? e.deltaX * 24 : e.deltaX;
      const step = clamp(delta / (cfg.cardWidth * 0.9), -0.6, 0.6);
      const position = posRef.current + step;
      posRef.current = cfg.loop ? position : clamp(position, 0, cfg.count - 1);
      if (!reducedRef.current) layout(posRef.current);
      clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = setTimeout(() => setFocus(Math.round(posRef.current)), 130);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      clearTimeout(wheelTimerRef.current);
    };
  }, [layout, setFocus]);

  const onPointerDown = useCallback(e => {
    if (cfgRef.current.count < 2 || !e.isPrimary || e.button !== 0) return;
    suppressClickRef.current = false;
    dragRef.current = {
      x: e.clientX,
      y: e.clientY,
      lastX: e.clientX,
      lastT: performance.now(),
      v: 0,
      moved: false,
      id: e.pointerId
    };
  }, []);

  const onPointerMove = useCallback(
    e => {
      const drag = dragRef.current;
      if (!drag || drag.id !== e.pointerId) return;
      const cfg = cfgRef.current;
      const stepPx = Math.max(cfg.cardWidth * 0.55 * scaleRef.current, 40);
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      if (!drag.moved) {
        if (Math.abs(dy) > 6 && Math.abs(dy) >= Math.abs(dx)) {
          dragRef.current = null;
          return;
        }
        if (Math.abs(dx) <= 6) return;
        clearTimeout(wheelTimerRef.current);
        tweenRef.current?.kill();
        drag.startPos = posRef.current;
        drag.moved = true;
        suppressClickRef.current = true;
        e.currentTarget.setPointerCapture(drag.id);
      }
      const now = performance.now();
      drag.v = (e.clientX - drag.lastX) / Math.max(now - drag.lastT, 1);
      drag.lastX = e.clientX;
      drag.lastT = now;
      const position = drag.startPos - dx / stepPx;
      posRef.current = cfg.loop ? position : clamp(position, 0, cfg.count - 1);
      if (!reducedRef.current) layout(posRef.current);
    },
    [layout]
  );

  const onPointerEnd = useCallback(e => {
    const drag = dragRef.current;
    if (!drag || drag.id !== e.pointerId) return;
    dragRef.current = null;
    if (!drag.moved) return;
    if (e.type !== 'pointerup') {
      setFocus(focusRef.current);
      return;
    }
    const stepPx = Math.max(cfgRef.current.cardWidth * 0.55 * scaleRef.current, 40);
    const recentVelocity = performance.now() - drag.lastT < 100 ? drag.v : 0;
    const momentum = reducedRef.current ? 0 : clamp(recentVelocity * 180 / stepPx, -1, 1);
    setFocus(Math.round(posRef.current - momentum));
  }, [setFocus]);

  const cancelPendingDrag = useCallback(e => {
    if (!dragRef.current?.moved) onPointerEnd(e);
  }, [onPointerEnd]);

  const onKeyDown = useCallback(
    e => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateBy(-1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateBy(1);
      }
    },
    [navigateBy]
  );

  const onCardClick = useCallback(
    event => {
      if (suppressClickRef.current) return;
      // Hit-test the projected stack. The event target can be the stage when
      // Chromium composites a tilted card behind the front card.
      const top = document.elementsFromPoint(event.clientX, event.clientY)[0];
      const card = top?.closest('.depth-carousel__card');
      const index = cardRefs.current.indexOf(card);
      if (index >= 0) setFocus(index, true);
    },
    [setFocus]
  );

  useEffect(() => {
    if (!autoplay || count < 2) return;
    const root = rootRef.current;
    let hovered = false;
    let focused = false;
    const stop = () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    };
    const start = () => {
      stop();
      autoTimerRef.current = window.setInterval(
        () => {
          if (!reducedRef.current && !hovered && !focused) navigateBy(1);
        },
        Math.max(cfgRef.current.autoplayDelay, 600)
      );
    };
    const onEnter = () => {
      hovered = true;
    };
    const onLeave = () => {
      hovered = false;
    };
    const onFocusIn = () => {
      focused = true;
    };
    const onFocusOut = () => {
      focused = false;
    };
    root?.addEventListener('mouseenter', onEnter);
    root?.addEventListener('mouseleave', onLeave);
    root?.addEventListener('focusin', onFocusIn);
    root?.addEventListener('focusout', onFocusOut);
    start();
    return () => {
      stop();
      root?.removeEventListener('mouseenter', onEnter);
      root?.removeEventListener('mouseleave', onLeave);
      root?.removeEventListener('focusin', onFocusIn);
      root?.removeEventListener('focusout', onFocusOut);
    };
  }, [autoplay, autoplayDelay, count, navigateBy]);

  useEffect(() => {
    layout(posRef.current);
  }, [layout, depth, spread, tilt, tiltDirection, visibleCards, falloff, blur, cardWidth, cardHeight, radius, count]);

  useEffect(
    () => () => {
      tweenRef.current?.kill();
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    },
    []
  );

  return (
    <div
      ref={rootRef}
      className={`depth-carousel ${className}`.trim()}
      style={{ '--dc-perspective': `${perspective}px`, '--dc-card-height': `${cardHeight}px` }}
      role="group"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div
        className="depth-carousel__stage"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onPointerLeave={cancelPendingDrag}
        onLostPointerCapture={event => {
          if (event.target === event.currentTarget) onPointerEnd(event);
        }}
        onClick={onCardClick}
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="depth-carousel__card"
            ref={el => { cardRefs.current[i] = el; }}
            style={{ width: cardWidth, height: cardHeight, borderRadius: radius }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={active !== i}
          >
            {item.image ? (
              <img className="depth-carousel__img" src={item.image} alt={item.alt || ''} draggable={false} />
            ) : (
              <div className="depth-carousel__placeholder">{item.title}</div>
            )}
            <span
              className="depth-carousel__tint"
              ref={el => { overlayRefs.current[i] = el; }}
              style={{ background: tint }}
            />
          </div>
        ))}
      </div>

      {showControls && count > 1 && (
        <>
          <button
            type="button"
            className="depth-carousel__arrow depth-carousel__arrow--prev"
            aria-label="Previous slide"
            onClick={() => navigateBy(-1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="depth-carousel__arrow depth-carousel__arrow--next"
            aria-label="Next slide"
            onClick={() => navigateBy(1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {showIndicators && count > 1 && (
        <div className="depth-carousel__dots" role="group" aria-label="Choose a slide">
          {data.map((item, i) => (
            <button
              key={i}
              type="button"
              aria-pressed={active === i}
              aria-label={item.title ? `Show ${item.title}` : `Go to slide ${i + 1}`}
              className={`depth-carousel__dot${active === i ? ' is-active' : ''}`}
              onClick={() => setFocus(i, true)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DepthCarousel;
