# 05 — Testing & polish

- **Parent:** PLAN-001
- **Trạng thái:** done
- **Ưu tiên:** Medium

## Mục tiêu

Chốt chất lượng trước khi merge: đúng chức năng, đúng UI, không lỗi phụ.

## Checklist

- [x] Test đổi theme qua click/tap.
- [x] Test reload vẫn giữ theme.
- [x] Test mobile/tablet/desktop.
- [x] Test keyboard focus + screen reader label cơ bản.
- [x] Test không có warning khó chịu trong console.

## Rủi ro chính

- Chỉ test desktop, sót lỗi mobile.

## Kết quả kiểm thử

- `npm run lint`: PASS
- `npm run build`: PASS (Next.js build thành công, static pages generated)

## Tiêu chí hoàn thành

- Đạt đủ checklist, có thể chuyển trạng thái PLAN-001 sang `done`.
