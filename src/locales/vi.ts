import { en } from './en';

export const vi: typeof en = {
  sidebar: {
    role: "Kỹ sư AI",
    home: "Trang chủ",
    about: "Giới thiệu",
    experience: "Kinh nghiệm",
    education: "Học vấn",
    projects: "Dự án",
    contact: "Liên hệ",
    copyright: "© 2026 Vũ Minh Anh"
  },
  about: {
    greeting: "Hi, I'm Vũ Minh Anh",
    location: "Làm việc tại Hà Nội, Việt Nam 🇻🇳",
    status: "Sẵn sàng làm việc",
    description: "Tôi chuyên xây dựng các hệ thống trí tuệ nhân tạo (AI) thông minh với hiệu năng và trải nghiệm người dùng đặt lên hàng đầu. Từ các kiến trúc RAG tĩnh tạp đến các giao diện hoàn thiện, tôi cung cấp các giải pháp AI toàn diện từ đầu đến cuối.",
    stackTag: "icon",
    skillsTitle: "Kỹ năng & Công nghệ",
    skillsDescription: "Một bộ công cụ toàn diện để xây dựng các ứng dụng hiện đại, với chuyên môn sâu về điều phối AI và lập trình full-stack."
  },
  experience: {
    tag: "Hành trình sự nghiệp",
    title: "Kinh nghiệm Làm việc",
    description: "Tham gia triển khai các ứng dụng thực tế kết hợp logic AI phức tạp với trải nghiệm người dùng mượt mà.",
    viewProject: "Xem Dự án",
    technologies: "Công nghệ:",
    showRes: "Chi tiết công việc",
    hideRes: "Ẩn chi tiết",
    keyRes: "Trách nhiệm chính:",
    items: [
      {
        role: "Kỹ sư AI/ML",
        company: "Physcode",
        location: "Hà Nội, Việt Nam",
        employmentType: "Toàn thời gian",
        workType: "Tại văn phòng",
        summary: "Tập trung vào các giải pháp AI và kiến trúc backend mạnh mẽ cho các nền tảng quy mô lớn.",
        projects: [
          {
            name: "Nền tảng Chatbot AI Agentic",
            description: "Nền tảng AI đa khách hàng quy mô lớn với tính năng tương tác giọng nói, luồng làm việc RAG agentic và kiến trúc tìm kiếm lai độ chính xác cao.",
            responsibilities: [
              "Điều phối các luồng làm việc RAG agentic cấp cao bằng LangGraph để áp dụng logic qua các trạng thái: viết lại câu hỏi, thu thập dữ liệu và sinh câu trả lời có bằng chứng",
              "Thiết lập bộ lọc chất lượng tìm kiếm khắt khe bằng đầu ra Pydantic có cấu trúc và ngưỡng trích dẫn để ngăn chặn ảo giác (hallucination) và đảm bảo tính toàn vẹn của dữ liệu",
              "Xây dựng công cụ tìm kiếm lai (hybrid search) tinh vi trong Qdrant kết hợp Dense và BM25 sparse embeddings với hợp nhất RRF, nén ngữ cảnh và đánh giá lại theo danh sách",
              "Phát triển hệ thống định tuyến (routing) ý định người dùng với độ trễ thấp bằng độ tương đồng cosine và bộ nhớ cache embedding của MongoDB, bỏ qua LLM để tối đa hóa tốc độ và tối ưu chi phí",
              "Nâng cao độ tin cậy của hệ thống với cơ chế timeout từng phần, circuit breaker và khả năng quan sát toàn diện thông qua phân tích luồng truy cập và LangSmith"
            ]
          },
          {
            name: "Mosyne AI",
            description: "Trợ lý sáng hình ảnh bằng kỹ thuật diffusion cho đội ngũ thiết kế, bao gồm tạo ảnh từ văn bản, inpainting theo mask, xóa/thay nền và upscale hình ảnh.",
            responsibilities: [
              "Phát triển các tính năng chỉnh sửa và tạo ảnh đầu cuối: văn bản thành hình, xóa/thay đổi nền và luồng làm việc inpainting/xóa theo mask",
              "Tối ưu hóa quá trình chạy diffusion bằng cách điều phối các tác vụ serverless trên Runpod (qua luồng ComfyUI) và áp dụng cơ chế theo dõi trạng thái bất đồng bộ",
              "Xây dựng luồng tiền xử lý ảnh ổn định: sửa hướng EXIF, thay đổi kích thước/letterbox + cắt khung, xử lý mask theo polygon/base64 và thiết lập hiệu ứng hợp nhất blending",
              "Áp dụng cấu trúc và mẫu gợi ý nội dung (prompt) qua LangChain và OpenAI để cải thiện chất lượng tạo ảnh và độ nhất quán khi xử lý hàng loạt"
            ]
          },
          {
            name: "Eduprompt",
            description: "Nền tảng học AI giúp sinh viên nắm vững cách ra lệnh cho AI (prompt engineering) qua phản hồi định lượng, chấm điểm qua tương đồng embedding và gợi ý từ LLM.",
            responsibilities: [
              "Thiết kế và triển khai công cụ chấm điểm dựa trên độ tương đồng embedding giữa kết quả của học viên và hình ảnh mục tiêu của giáo viên",
              "Điều phối các hệ thống suy luận phức tạp bao gồm xử lý ảnh mã hóa base64 và tạo mô tả ảnh (vision-to-captioning) qua RunPod API",
              "Tích hợp LLM để đưa ra các gợi ý đánh giá cá nhân hóa giúp cải thiện kỹ năng prompt cho người dùng",
              "Thiết kế API có cấu trúc với Pydantic và xây dựng tầng bảo mật xác thực JWT an toàn kết hợp quản lý token trên MongoDB",
              "Phát triển thuật toán phân tích điểm tiêu chuẩn sử dụng NumPy và thêm khả năng chống lỗi mạnh mẽ cho suy luận AI quy mô lớn"
            ]
          }
        ]
      },
      {
        role: "Kỹ sư AI",
        company: "Hyperlogy",
        location: "Hà Nội, Việt Nam",
        employmentType: "Toàn thời gian",
        workType: "Tại văn phòng",
        summary: "Đảm nhiệm phát triển các giải pháp thị giác máy tính (Computer Vision) phục vụ định danh điện tử và tự động hóa trong y tế.",
        projects: [
          {
            name: "AI eKYC cho Ngân hàng",
            description: "Xác thực khuôn mặt, OCR và các luật chống gian lận được triển khai trong luồng xác minh (onboarding).",
            responsibilities: [
              "Thiết kế và huấn luyện trích xuất vùng mặt cũng như mô hình định danh thực thể sống (liveness detection) để chống giả mạo",
              "Xây dựng luồng trích xuất thông tin giấy tờ tùy thân (OCR) tự động hóa hồ sơ khách hàng với độ chính xác cao",
              "Tích hợp hệ thống phân tích thời gian thực vào ứng dụng ngân hàng cốt lõi, giúp giảm thiểu 55% nguồn lực xác duyệt thủ công"
            ]
          },
          {
            name: "Hệ thống Điểm danh bằng Khuôn mặt (Bệnh viện)",
            description: "Nhận diện khuôn mặt thời gian thực để điểm danh tự động cho cán bộ y tế tại các cơ sở bệnh viện.",
            responsibilities: [
              "Phát triển pipeline nhận diện khuôn mặt ổn định, nhận diện chính xác kể cả khi nhân viên y tế đeo khẩu trang hoặc trong điều kiện thiếu sáng",
              "Tối ưu hóa các luồng suy luận trên biên (edge) nhằm đạt độ trễ cực thấp cho quá trình nhận diện luồng video với nhiều người cùng lúc",
              "Tích hợp luồng dữ liệu điểm danh theo thời gian thực vào hệ thống quản lý nhân sự tập trung của bệnh viện"
            ]
          }
        ]
      },
      {
        role: "Kỹ sư AI",
        company: "AI Soft",
        location: "Hà Nội, Việt Nam",
        employmentType: "Toàn thời gian",
        workType: "Hybrid",
        summary: "Xây dựng các hệ thống phát hiện bất thường đa phương thức bằng AI và thiết lập quy trình đánh giá khắt khe cho các mô hình ngôn ngữ lớn (LLMs).",
        projects: [
          {
            name: "AI KC IoT",
            description: "Hệ thống phát hiện đa phương thức cho bề mặt tấn công IoT, bao gồm tấn công từ chối dịch vụ (DDoS), dò cổng và brute-force.",
            responsibilities: [
              "Thiết kế và huấn luyện các mô hình phát hiện rủi ro đạt độ chính xác 98,4% trên 4 nhóm tấn công chính",
              "Tiền xử lý và chuẩn hóa dữ liệu viễn trắc đa dạng để lập bản đồ các hành vi đe dọa trực tuyến",
              "Tối ưu hóa hiệu năng suy luận (inference) đảm bảo tốc độ phát hiện theo thời gian thực trên các thiết bị tài nguyên thấp"
            ]
          },
          {
            name: "Nền tảng Đánh giá Model AI (LLM Evaluation)",
            description: "Hệ thống benchmark và quy trình đánh giá định lượng chuyên sâu cho các AI Models & LLMs áp dụng vào thực tế.",
            responsibilities: [
              "Thiết lập bộ tiêu chí đánh giá chuyên biệt nhằm phát hiện ảo giác (hallucination) và đối soát độ chính xác của ngữ cảnh",
              "Xây dựng kho dữ liệu gốc (golden datasets) và bộ test tự động để benchmark và so sánh chất lượng giữa các phiên bản model",
              "Tích hợp đánh giá có con người tham gia (Human-in-the-loop) để liên tục tinh chỉnh (align) và cải thiện chất lượng sinh từ prompt"
            ]
          }
        ]
      },
      {
        role: "Lập trình viên Web & AI Fullstack",
        company: "Kinh nghiệm freelance",
        location: "Từ xa",
        employmentType: "Freelance",
        workType: "Từ xa",
        summary: "Phát triển ứng dụng web fullstack, RAG và các trợ lý AI tuỳ chỉnh cho các nhu cầu doanh nghiệp đa dạng.",
        projects: [
          {
            name: "Discipline QR — Quản lý kỷ luật học đường",
            description: "Hệ thống quản lý kỷ luật chuyên biệt cho học sinh cho phép đánh giá nội quy ngay lập tức thông qua quét mã QR, theo dõi minh bạch và tích hợp trợ lý AI để tra cứu thời gian thực.",
            responsibilities: [
              "Phát triển mô-đun quét lỗi bằng AI tốc độ cao giúp lưu trữ lỗi kỷ luật và thưởng điểm ngay lập tức",
              "Tích hợp hệ thống nhật ký sửa đổi (audit logging) đảm bảo tính minh bạch dữ liệu cho quản trị viên nhà trường và phụ huynh",
              "Xây dựng trợ lý ảo AI chuyên biệt xử lý các thắc mắc về nội quy và hỗ trợ sự cố, giảm bớt thủ tục cứng nhắc",
              "Thiết kế giao diện di động cho phép giáo viên quản lý lỗi dễ dàng khi di chuyển"
            ]
          },
          {
            name: "Enterprise RAG Assistant",
            description: "Trợ lý AI nắm vững văn bản dành cho quản lý tri thức nội bộ với độ trễ dưới 1 giây.",
            responsibilities: [
              "Triển khai tìm kiếm vector và trích xuất ngữ nghĩa",
              "Tối ưu hóa các mẫu câu hỏi (prompt) để tăng độ chính xác"
            ]
          }
        ]
      }
    ]
  },
  education: {
    tag: "Học vấn",
    title: "Nền tảng khoa học máy tính vững chắc",
    description: "Tư duy thuật toán kết hợp kinh nghiệm thực chiến giúp tôi dễ dàng hợp tác cùng các đội nghiên cứu, dữ liệu, và sản phẩm.",
    focusLabel: "Tập trung",
    items: [
      {
        degree: "Kỹ sư Công nghệ Thông tin",
        institution: "PTIT",
        period: "2019 — 2024",
        focus: "Chuyên ngành hệ thống AI, hệ thống phân tán và nền tảng dữ liệu."
      }
    ],
    certTag: "Chứng chỉ",
    viewPdf: "Xem PDF ↗",
    digitalCredentials: "Chứng chỉ Kỹ thuật số",
    certificates: [
      {
        title: "Cấu trúc dữ liệu và giải thuật",
        issuer: "Samsung",
        description: "Nghiên cứu nâng cao lý thuyết đồ thị, tối ưu hóa và giải quyết bài toán quy mô lớn. (2020 — 2021)"
      },
      {
        title: "Ubuntu và WSL",
        issuer: "Canonical",
        description: "Chứng chỉ Ubuntu chính thức bao gồm thiết lập WSL, các công cụ Linux và môi trường phát triển đa nền tảng."
      },
      {
        title: "JavaScript Nâng cao",
        issuer: "F8",
        description: "Chứng chỉ JavaScript nâng cao về lập trình bất đồng bộ, ES6+, tương tác DOM và tối ưu hóa hiệu năng."
      }
    ]
  },
  projects: {
    tag: "Hồ sơ Sáng tạo",
    title: "Các dự án cá nhân",
    description: "Khám phá tiềm năng AI qua các sản phẩm tự chế, công cụ thực nghiệm và mã nguồn mở.",
    moreBuilds: "Thêm phân tích & thực nghiệm",
    footer: "Bạn có hứng thú với kiến trúc phía sau? Tôi luôn sẵn sàng trao đổi về các quyết định thiết kế và hệ thống.",
    items: [
      {
        title: "Enjoy reading – Web e-commerce tích hợp AI Chatbot tư vấn sản phẩm",
        description: "Phát triển nền tảng thương mại điện tử tích hợp AI recommendation và AI chatbot tư vấn sản phẩm. Xây dựng backend bằng FastAPI, thiết kế database PostgreSQL và API cho toàn hệ thống. Triển khai AI recommendation system dựa vào thông tin người dùng.",
        impact: "Cung cấp trải nghiệm mua sắm thông minh với tính cá nhân hóa cao."
      },
      {
        title: "AI Resume Parser",
        description: "Đường ống LLM xử lý PDF, cấu trúc hồ sơ ứng viên, và xếp hạng thông qua vòng lặp đánh giá chuyên biệt.",
        impact: "Giảm 70% thời gian sàng lọc của nhà tuyển dụng."
      }
    ]
  },
  contact: {
    tag: "Liên hệ",
    title: "Hãy cùng nhau tạo ra kết quả",
    description: "Thích gọi nhanh hay tóm tắt nội dung? Hãy chọn một cách thuận tiện nhất và chúng ta sẽ cùng đi vào chi tiết.",
    tap: "Bấm để kết nối",
    messageTag: "Tin nhắn",
    messageTitle: "Chia sẻ ý tưởng của bạn",
    messageDesc: "Trả lời trong vòng 24h ngày hành chính.",
    formName: "Họ và tên",
    formEmail: "Email",
    formMessage: "Tin nhắn",
    nameReq: "Tên không được bỏ trống",
    emailReq: "Email không được bỏ trống",
    emailInvalid: "Địa chỉ email không hợp lệ",
    messageReq: "Tin nhắn không được bỏ trống",
    sending: "Đang gửi...",
    sendBtn: "Gửi tin nhắn",
    success: "Gửi tin nhắn thành công!"
  }
};
