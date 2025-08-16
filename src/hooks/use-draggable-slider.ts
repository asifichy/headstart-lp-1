"use client";

import { useRef, useState, useCallback } from "react";

export const useDraggableSlider = () => {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
	const [dragStarted, setDragStarted] = useState(false);

	const handleMouseDown = useCallback((e: React.MouseEvent) => {
		if (!scrollContainerRef.current) return;

		setIsDragging(true);
		setDragStarted(false);
		setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
		setScrollLeft(scrollContainerRef.current.scrollLeft);

		// Prevent text selection and other default behaviors
		e.preventDefault();
	}, []);

	const handleMouseLeave = useCallback(() => {
		setIsDragging(false);
		setDragStarted(false);
	}, []);

	const handleMouseUp = useCallback(() => {
		setIsDragging(false);
		setDragStarted(false);
	}, []);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent) => {
			if (!isDragging || !scrollContainerRef.current) return;

			e.preventDefault();

			const x = e.pageX - scrollContainerRef.current.offsetLeft;
			const walk = (x - startX) * 1.5; // Reduced multiplier for smoother scrolling

			// Mark that dragging has started (for preventing clicks)
			if (Math.abs(walk) > 5) {
				setDragStarted(true);
			}

			scrollContainerRef.current.scrollLeft = scrollLeft - walk;
		},
		[isDragging, startX, scrollLeft]
	);

	// Handle click events to prevent unwanted clicks during drag
	const handleClick = useCallback(
		(e: React.MouseEvent) => {
			if (dragStarted) {
				e.preventDefault();
				e.stopPropagation();
			}
		},
		[dragStarted]
	);

	// Touch events for mobile support
	const handleTouchStart = useCallback((e: React.TouchEvent) => {
		if (!scrollContainerRef.current) return;

		setIsDragging(true);
		setDragStarted(false);
		setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
		setScrollLeft(scrollContainerRef.current.scrollLeft);
	}, []);

	const handleTouchMove = useCallback(
		(e: React.TouchEvent) => {
			if (!isDragging || !scrollContainerRef.current) return;

			const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
			const walk = (x - startX) * 1.5;

			if (Math.abs(walk) > 5) {
				setDragStarted(true);
			}

			scrollContainerRef.current.scrollLeft = scrollLeft - walk;
		},
		[isDragging, startX, scrollLeft]
	);

	const handleTouchEnd = useCallback(() => {
		setIsDragging(false);
		setDragStarted(false);
	}, []);

	return {
		handleClick,
		handleMouseDown,
		handleTouchEnd,
		handleMouseUp,
		handleTouchMove,
		handleTouchStart,
		handleMouseMove,
		handleMouseLeave,
		scrollContainerRef,
		isDragging,
	};
};
