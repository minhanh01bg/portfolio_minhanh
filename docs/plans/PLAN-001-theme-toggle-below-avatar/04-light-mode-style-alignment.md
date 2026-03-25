# 04 — Light mode style alignment

- **Parent:** PLAN-001
- **Trạng thái:** draft
- **Ưu tiên:** Medium

## Mục tiêu

Đảm bảo Sidebar và khu vực liên quan hiển thị tốt ở Light mode (không quá tối/thiếu tương phản).

## File dự kiến ảnh hưởng

- `src/components/Sidebar.tsx`
- `src/app/globals.css`

## Checklist

- [ ] Rà soát class hard-code nền tối (`bg-[#05060d]`, text trắng cứng...).
- [ ] Thêm class light/dark tương ứng (`dark:` hoặc CSS vars).
- [ ] Kiểm tra contrast text/viền/button ở light mode.

## Rủi ro chính

- Sửa màu một chỗ làm lệch style toàn cục.

## Tiêu chí hoàn thành

- Sidebar đọc rõ, tương phản tốt ở cả hai theme.
