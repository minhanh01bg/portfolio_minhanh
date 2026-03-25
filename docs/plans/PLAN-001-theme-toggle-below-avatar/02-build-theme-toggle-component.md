# 02 — Build ThemeToggle component

- **Parent:** PLAN-001
- **Trạng thái:** draft
- **Ưu tiên:** High

## Mục tiêu

Tạo component toggle độc lập để chuyển Light/Dark có accessibility cơ bản.

## File dự kiến ảnh hưởng

- `src/components/ThemeToggle.tsx` (mới)
- (tuỳ chọn) `src/components/ui/*` nếu tái dùng button style

## Checklist

- [ ] Tạo component client (`"use client"`).
- [ ] Dùng `useTheme()` để lấy/set theme.
- [ ] Có fallback mounted-check tránh mismatch.
- [ ] Thêm `aria-label`, `aria-pressed`.
- [ ] Có trạng thái hover/focus rõ.

## Rủi ro chính

- Label/icon nhảy trạng thái khi hydration.

## Tiêu chí hoàn thành

- Toggle đổi theme được ngay khi click.
- Không có hydration warning liên quan toggle.
