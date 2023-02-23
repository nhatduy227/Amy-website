import React from 'react';
import banner from '../../Assets/about-banner.png';
import bulletPoint from '../../Assets/bullet-point-img.svg';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';

const Notice = () => {
  return (
    <div>
      <div className="">
        <img src={banner} alt="banner" className="inline-block w-full object-cover" />
      </div>
      <div className="w-full lg:pl-36 lg:pr-48 pl-10 pr-16 py-10 flex flex-col gap-10 bg-background-main text-white relative overflow-hidden">
        {/* Decoration */}
        <>
          <img
            src={la1}
            alt=""
            className="hidden lg:inline-block w-[250px] display-no top-[50px] -left-[50px] absolute"
          />
          <img
            src={bubbleDeco}
            alt="bubbleDeco"
            className="hidden lg:inline-block w-[400px] top-[300px] -left-[100px] absolute "
          />

          <img
            src={bubbleDeco}
            alt="bubbleDeco"
            className="hidden lg:inline-block w-[400px] top-[600px] -right-[120px] absolute"
          />
          <img
            src={la2}
            alt=""
            className="hidden lg:inline-block w-[250px] top-[1000px] -right-[50px] absolute rotate-90"
          />

          <img src={la1} alt="" className="hidden lg:inline-block w-[220px] bottom-6 left-[5px] absolute" />
        </>

        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default ml-4">GHI CHÚ</h2>
            <div>
              <ul className="lg:pl-5 pt-2">
                <li>
                  Tất cả các sản phẩm sẽ được chuyển vào kho lạnh trong suốt quá trình vận chuyển, quý khách vui lòng
                  cho sản phẩm vào tủ lạnh ngay khi nhận được.
                </li>
                <li className="inline-block py-4">Khu vực giao hàng: Mỗi đơn hàng sẽ được giao đến một địa chỉ.</li>

                <li>
                  Không giao hàng vào thứ 7 chủ nhật, các ngày lễ, ngày nghỉ do chính phủ điều chỉnh linh hoạt, thiên
                  tai; giao hàng bình thường sẽ được thực hiện trong thời gian còn lại. Ngoài ra, do chính sách không
                  giao hàng vào ngày chủ nhật do công ty chúng tôi quy định nên hiện tại chưa thể hẹn ngày nhận hàng cụ
                  thể. Tuy nhiên, bạn có thể chọn thời điểm dự kiến ​​giao hàng đến (trước 13:00 hoặc từ 14:00 đến Sau
                  khi xuất hàng sẽ căn cứ vào tình hình thực tế trong ngày. Vui lòng đặt trước thời gian và ngày cho
                  hàng hóa dự kiến ​​đến và hiểu rằng chúng tôi sẽ không chịu trách nhiệm bồi thường nếu hàng hóa đến
                  muộn.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="bg-primary-default pl-5 rounded my-5">Trả lại và hoàn tiền:</h3>
              <ul className="lg:pl-5 list-disc">
                <li className="inline-block">
                  Khi đơn đặt hàng được thiết lập, nó thể hiện rằng bạn hiểu mô tả sau và đồng ý hợp tác với chúng tôi:
                </li>

                <li className="py-4">
                  Do việc xem xét vệ sinh an toàn thực phẩm, chỉ những khiếm khuyết của bản thân hàng hóa, hư hỏng, sai
                  sót trong vận hành hoặc phá hủy do quá trình giao hàng mới có thể được yêu cầu trả lại hoặc hoàn tiền.
                </li>

                <li className="py-4">
                  Vui lòng hiểu rằng đơn trả hàng và hoàn tiền sẽ bị từ chối nếu hàng hóa bị giảm chất lượng sau khi
                  không được niêm phong, bị ăn mòn, mất nhiệt độ cần thiết và được giữ trong điều kiện không thích hợp!
                </li>
                <li className="py-4">
                  Trước khi đặt hàng, vui lòng đọc kỹ mô tả trên trang sản phẩm hoặc kiểm tra thông tin chi tiết với
                  nhân viên chăm sóc khách hàng trước khi thực hiện giao dịch! Cty AMY chỉ cung cấp dịch vụ giao hàng
                  đông lạnh tận nhà nhưng không chịu trách nhiệm về việc giao hàng chậm trễ của công ty logistics. Bạn
                  có thể tìm hiểu thêm thông tin tại trang web chính thức của GRAB hoặc gọi cho bộ phận chăm sóc khách
                  hàng của GRAB theo số : (84.4) ......
                </li>
                <li className="py-4">
                  Khi xử lý khoản tiền hoàn lại, khoản tiền đó sẽ được hoàn lại trực tiếp vào thẻ tín dụng được sử dụng
                  để thanh toán (ngày hoàn trả thực tế sẽ được kiểm tra với ngân hàng của bạn) nếu bạn thanh toán bằng
                  thẻ tín dụng. Nếu chuyển khoản ngân hàng được sử dụng để thanh toán, tiền hoàn lại sẽ được chuyển vào
                  tài khoản được chỉ định hoặc bạn có thể chuyển số tiền hoàn lại thành điểm tiền mặt tương đương với số
                  tiền tương tự để mua hàng trong tương lai.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="bg-primary-default pl-5 rounded my-5">Thủ tục phản ánh các vấn đề về sản phẩm:</h3>
              <ul className="lg:pl-5 list-disc">
                <li className="py-4">
                  Khi sản phẩm nhận được không phù hợp với thông số kỹ thuật và số lượng đặt hàng, Nếu sản phẩm bị hư
                  hỏng nghiêm trọng trong quá trình giao hàng, Nếu bạn có bất kỳ ý kiến ​​hoặc nghi ngờ nào về chất
                  lượng của sản phẩm nhận được, Vui lòng chụp ảnh hoặc quay video về sản phẩm trong vòng hai ngày sau
                  khi nhận được sản phẩm, giữ lại sản phẩm và liên hệ với nhân viên chăm sóc khách hàng của chúng tôi.
                  Chúng tôi sẽ xử lý nó cho bạn trong thời gian sớm nhất. Bất kỳ trường hợp nào khác được loại trừ ở
                  trên sẽ không được chấp nhận trả lại và hoàn lại tiền.
                </li>
                <li className="py-4">
                  Nếu bạn muốn trả lại sản phẩm, cả bạn và cửa hàng chúng tôi sẽ cùng có trách nhiệm khôi phục lại tình
                  trạng ban đầu khi giao dịch chấm dứt theo quy định của Bộ luật dân sự.
                </li>
                <li className="py-4">
                  Vì vậy: Vui lòng giữ sản phẩm ở trạng thái hoàn toàn mới cũng như xác nhận không thiếu sản phẩm chính,
                  biên lai và phụ kiện liên quan trước khi gửi lại cùng với bao bì ban đầu để chúng tôi xử lý khoản hoàn
                  trả có liên quan. <br />
                  Nếu sản phẩm bị hư hỏng, hao mòn, trầy xước, bụi bẩn và bao bì không hoàn chỉnh hoặc bị hư hỏng do sử
                  dụng và tháo dỡ không đúng cách và không thể trả lại cửa hàng của chúng tôi ở trạng thái hoàn chỉnh,
                  chúng tôi sẽ tính phí yêu cầu để khôi phục lại nguyên bản ban đầu nêu theo tình hình thực tế hoặc tính
                  giá sản phẩm theo tỷ lệ điều kiện bảo quản sản phẩm.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="bg-primary-default pl-5 rounded my-5">Hủy đơn hàng:</h3>
              <ul className="lg:pl-5 list-disc">
                <li>
                  Khi bạn hoàn thành đơn đặt hàng, xin vui lòng sắp xếp việc thanh toán trong vòng hai ngày; nếu không,
                  đơn đặt hàng có thể bị hủy hoặc ngày đến sẽ bị hoãn lại. Cảm ơn bạn đã hợp tác của bạn.
                </li>
                <li className="py-4">
                  Sau khi bạn hoàn tất thanh toán cho shop tại website chính thức của Cty AMY mà phải hủy đơn hàng vì
                  bất kỳ lý do gì, vui lòng thông báo việc hủy đơn hàng cho chúng tôi thông qua đường dây chuyên dụng
                  chăm sóc khách hàng, LINE, hoặc tin nhắn riêng trên Facebook ba làm việc vài ngày trước ngày giao hàng
                  ban đầu (không bao gồm ngày nhận sản phẩm ban đầu, các ngày lễ thường hoặc các ngày lễ quốc gia) và
                  phải trước 17:00. Sau khi được nhân viên chăm sóc khách hàng phản hồi và xác nhận, đơn hàng sẽ chính
                  thức bị hủy. Đường dây dành riêng cho dịch vụ khách hàng (84.4) 653 653 67 (9 giờ sáng - 5 giờ chiều;
                  trừ ngày lễ / ngày nghỉ bình thường).
                </li>
                <li className="py-4">
                  Phí xử lý sẽ được thu cho việc hủy bỏ ba ngày làm việc trước ngày đến ban đầu, không bao gồm ngày nhận
                  sản phẩm ban đầu, ngày lễ thường hoặc ngày lễ quốc gia. Đây là phí xử lý cho luồng thanh toán của bên
                  thứ ba. <br />
                  Nếu việc hủy đơn hàng được thông báo trong vòng ba ngày kể từ ngày đến ban đầu (không bao gồm ngày
                  đến), AMY sẽ chịu 100% số tiền mà không hoàn lại bất kỳ khoản nào do sản phẩm đã được bước vào giai
                  đoạn sản xuất.
                </li>
                <li className="py-4">
                  Đối với việc hủy đơn hàng đã xác nhận, AMY sẽ hoàn lại số tiền vào thẻ tín dụng hoặc chuyển khoản ngân
                  hàng trong vòng 15 ngày sau khi trừ tiền phạt. Ngày hoàn trả thực tế sẽ được kiểm tra với ngân hàng
                  phát hành thẻ.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
