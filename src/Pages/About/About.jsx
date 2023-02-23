import React from 'react';
import banner from '../../Assets/about-banner.png';
import technology from '../../Assets/technology.png';
import bulletPoint from '../../Assets/bullet-point-img.svg';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import bubbleDeco from '../../Assets/bubble-deco.png';

const About = () => {
  return (
    <div>
      <div className="">
        <img src={banner} alt="banner" className="inline-block w-full object-cover" />
      </div>
      <div className="w-full lg:pl-36 lg:pr-48 pl-10 pr-16 py-10 flex flex-col gap-10 bg-background-main text-white relative overflow-hidden">
        {/* Decoration */}
        <>
          <img src={la1} alt="" className="hidden lg:inline-block w-[250px] display-no top-[50px] -left-[50px] absolute" />
          <img src={bubbleDeco} alt="bubbleDeco" className="hidden lg:inline-block w-[400px] top-[300px] -left-[100px] absolute " />
  
          <img src={bubbleDeco} alt="bubbleDeco" className="hidden lg:inline-block w-[400px] top-[600px] -right-[120px] absolute" />
          <img src={la2} alt="" className="hidden lg:inline-block w-[250px] top-[1000px] -right-[50px] absolute rotate-90" />
  
          <img src={la1} alt="" className="hidden lg:inline-block w-[220px] bottom-6 left-[5px] absolute" />
        </>


        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">CHÚNG TÔI</h2>
            <ul className="mt-2 ml-1">
              <li>
                Trà sữa trân châu bắt nguồn từ Đài Loan, đã du nhập vào Việt Nam trên 10 năm. Đây là “thức uống yêu
                thích số 1 của giới trẻ”, không chỉ ở Việt Nam mà ra cả Thế giới.
              </li>

              <li className="py-4">
                Tập Đoàn AMY tại Việt Nam luôn tự hào với hơn 15 năm kinh nghiệm trong lĩnh vực “Cung cấp - Sản xuất -
                Xuất khẩu” các loại: Tinh bột sắn và Bột biến tính. <br />
              </li>
              <li>
                AMY Chúng tôi nhận thấy nguyên liệu “Tinh bột” chính là “Linh hồn” để tạo nên những hạt “Trân châu tươi”
                thơm ngon, dẻo dai giàu năng lượng.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">ĐAM MÊ</h2>
            <ul className="mt-1 ml-1">
              <li>
                Với Ước mơ mang lại một nét “Văn hóa - Ẩm thực” độc đáo. Tập Đoàn AMY đã tìm đến “Xứ sở trân châu”, mời
                một chuyên gia hàng đầu về “Ẩm thực và thức uống” người Đài Loan: Ông Lucas.
              </li>

              <li className="py-4">
                Là người bản xứ, Ông dùng sự thấu hiểu và kinh nghiệm của mình để xây dựng một dây chuyền sản xuất “Trân
                châu tươi” tại Việt Nam theo đúng quy trình và tiêu chuẩn của Đài Loan.
              </li>

              <li>
                Đặc biệt khâu chọn lựa nguyên liệu. Tinh bột khoai mì được trồng trên vùng cao nguyên, cùng nguồn nước
                tinh khiết và đường Caramen tự nhiên của các nhà sản xuất uy tín thế giới, với khả năng truy xuất nguồn
                gốc hoàn chỉnh.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">CÔNG NGHỆ</h2>
            <p className="mt-1 ml-1">
              Song song với đó là thiết bị vận hành, được sử dụng công nghệ mới với dây chuyền sản xuất hiện đại của
              những nước tiên tiến trên thế giới.
            </p>
            <img src={technology} alt="" className="mt-4" />
          </div>
        </div>

        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">KHAI SÁNG</h2>
            <ul className="mt-1 ml-1">
              <li>
                Bạn có thể tưởng tượng được không? Khi những áp lực trong cuộc sống với nhiều nguyên do... đang bủa vây.
                Mà thời gian thì không nhiều cho việc thư giãn, nghỉ ngơi... và nấu nướng là một nhiệm vụ bất khả thi.
              </li>
              <li className="pt-4">
                Tập Đòan AMY đã thấu hiểu và “Tâm huyết” theo đuổi một ý tưởng mới: “Trân châu tươi ăn liền” đầu tiên
                tại Việt Nam. Với mong muốn: Niềm Vui sẽ đến thật đơn giản và dễ dàng.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start">
          <img src={bulletPoint} alt="" className="w-20" />
          <div className="ml-2 text-justify leading-relaxed">
            <h2 className="text-4xl text-primary-default">CAM KẾT</h2>
            <ul className="mt-1 ml-1">
              <li>
                Tập Đoàn AMY cùng các Chuyên gia trong nước và Quốc tế sẽ kiểm tra nghiêm ngặt và đưa ra các giải pháp
                tốt nhất để đảm bảo, phù hợp với “Truyền thống & Văn Hóa - Ẩm thực” của người Việt Nam.
              </li>
              <li className="py-4">
                Trong đó Cam Kết:
                <ul className="list-disc pl-5">
                  <li>Sản phẩm “Không chất bảo quản” mà vẫn giữ được vị “Tươi - Dẻo - Thơm Ngon” lâu dài. </li>
                  <li>
                    “Tiết kiệm thời gian” là tiêu chí bậc nhất. Giúp: “Dễ dàng - Nhanh chóng - Tiện lợi” trong việc pha
                    chế.{' '}
                  </li>
                  <li>
                    “An tòan - Vệ sinh - Đảm bảo sức khỏe” Được chứng nhận bởi Công ty Quốc Gia Good Việt Nam: HACCP
                    CODEX 2020 Tương lai sẽ trở thành một trong những nhà máy chế biến Thạch - Trân châu, phục vụ ngành
                    pha chế số 1 tại Việt Nam.{' '}
                  </li>
                </ul>
              </li>
              Đây chính là Niềm vui - Hạnh phúc và Tự hào, khi mang lại một điều nho nhỏ, có thể góp sức và chia sẻ với
              người tiêu dùng Việt Nam.
              <br />
              Chân thành Cảm ơn.
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
