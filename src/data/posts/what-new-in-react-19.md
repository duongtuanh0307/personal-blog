---
title: "What's new in React 19"
subtitle: "New features of React 19. (This article is written in Vietnamese so that it can be posed in my another Channel)"
date: "2025-01-18"
id: 3
---

Chào buổi sáng và chúc cả nhà một tuần mới đầy năng lượng.
Sau 2 bài viết của chị An; hôm nay em xin 1 vé nói về topic FE nhé ạ.
Như mọi người chắc cũng đã biết, đầu tháng 12 vằ rồi, phiên bản stable của React 19 đã chính thức được publish, vì thế em muốn cùng mọi người nhìn qua một chút những điểm mới của lần release này.

1. Thêm support cho async function giúp việc xử lý pending states, errors, forms, updates dễ dàng hơn với các hooks mới

- useOptimistic
- useActionState
  Đồng bộ với những thay đổi của React 19, react-dom cũng thêm features mới cho các element <form>, <input>, <button>; cũng như giới thiệu thêm hook useFormStatus hỗ trợ dev trong việc access trạng thái của form.

2. API mới: 'use'
3. React Server Component và Server Actions
4. Ngoài ra, React 19 cũng đem đến nhiều điểm cải thiện khác so với version trước đó:

- Sử dụng 'ref' như prop trong function components thay vì 'forwardRef'
- Cải thiện trong việc report lỗi: Các lỗi liên quan sẽ được hiện thị trong 1 message với thông tin chi tiết về vị trí, nguyên nhân lỗi
- Với React 19, chúng ta có thể wrap component consume context trong tag <Context> thay vì cần sử dụng <Context.Provider> như trước kia.
- Thêm cleanup functions cho 'ref'. Function cleanup sẽ được gọi khi element được remove khỏi DOM
- Thêm initial value cho useDeferedValue hook
- Thêm support cho Document Metadata như <title>, <link>, <meta>
- Thêm support cho stylesheets
- Hỗ trợ việc sử dụng thẻ <script> trong React Component
- Thêm các API hỗ trợ preloading resources: preinit, preload, prefetchDNS, preconnect, preloadModule, preinitModule
- Tăng tính tương thích với third-party scripts và extensions
- Full support cho custom elements

Trên đây là những điểm mới của React 19 so sánh với những version trước.
Rất mong được cùng anh chị em trao đổi về thêm về react nói riêng và những kiến thức FE nói chung ạ
