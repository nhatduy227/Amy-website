import React from 'react';
import { useParams } from 'react-router-dom';

import ProductsComponent from '../../Components/ProductsComponent/ProductsComponent';

// Banner
import phomaiBanner from '../../Assets/phomai-banner.png';
import cunangBanner from '../../Assets/cunang-banner1.png';
import duongmiaBanner from '../../Assets/duongmia-banner.png';
import duongdenBanner from '../../Assets/duongden-banner.png';
import botgiaviBanner from '../../Assets/botgiavi-banner.jpg';
import botchienxuBanner from '../../Assets/botchienxu-banner.png';
import tranchaukhoBanner1 from '../../Assets/TrangHat.png';
import tranchaukhoBanner2 from '../../Assets/TrangHat02.png';

// Mood
import moodCuNang from '../../Assets/moodCuNang.png';
import moodDuongMia from '../../Assets/moodDuongMia.png';
import moodDuongDen from '../../Assets/moodDuongDen.png';
import noPreservatives from '../../Assets/no-preservatives.png';

// Hướng dẫn sử dụng
import defrost01 from '../../Assets/defrost01.png';
import defrost02 from '../../Assets/defrost02.png';
import step1 from '../../Assets/step1.png';
import step2 from '../../Assets/step2.png';
import step3 from '../../Assets/step3.png';
import step4 from '../../Assets/step4.png';

import certificate from '../../Assets/certificate.png';

// List product
import tranchaucunang from '../../Assets/cunang.png';
import tranchauduongmia from '../../Assets/duongmia.png';
import tranchauduongden from '../../Assets/duongden.png';
import tranchauphomai from '../../Assets/phomai.png';

const dummyData = [
  {
    id: 1,
    title: 'Trân châu củ năng 350gr',
    img: tranchaucunang,
    price: 25000,
  },
  {
    id: 2,
    title: 'Trân châu đường mía 350gr',
    img: tranchauduongmia,
    price: 25000,
  },
  {
    id: 3,
    title: 'Trân châu đường đen 350gr',
    img: tranchauduongden,
    price: 25000,
  },
  {
    id: 4,
    title: 'Trân châu phô mai 350gr',
    img: tranchauphomai,
    price: 25000,
  },
];


const Product = () => {
  const { id } = useParams();

  return (
    <div className="bg-background-main pb-10">
      {/* Product Banner */}
      <div className="flex flex-col overflow-hidden items-center justify-center">
        {id === '1' && (
          <>
            <img src={cunangBanner} alt="cunangBanner" className="w-full inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Củ năng</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
        {id === '2' && (
          <>
            <img src={duongmiaBanner} alt="duongmiaBanner" className="w-full inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Đường mía</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
        {id === '3' && (
          <>
            <img src={duongdenBanner} alt="duongdenBanner" className="w-full inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Đường đen</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
        {id === '4' && (
          <>
            <img src={phomaiBanner} alt="" className="w-full inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Phô mai</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
        {id === '5' && (
          <>
            <img src={tranchaukhoBanner2} alt="" className="w-full inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Phô mai</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
        {id === '6' && (
          <>
            <img src={tranchaukhoBanner2} alt="" className="w-full inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Phô mai</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
        {id === '7' && (
          <>
            <img src={tranchaukhoBanner1} alt="" className="w-full inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Phô mai</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
        {id === '8' && (
          <>
            <img src={tranchaukhoBanner1} alt="" className="w-full inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Phô mai</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
        {id === '9' && (
          <>
            <img src={botgiaviBanner} alt="" className="w-full h-[610px] object-cover inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Phô mai</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
        {id === '10' && (
          <>
            <img src={botchienxuBanner} alt="" className="w-full h-[610px] object-cover inline-block" />
            <p className="text-primary-default text-center text-xl leading-relaxed mt-8 px-36">
              Hãy thưởng cho mình một ly <strong>Trân châu tươi</strong> ăn liền vị “<strong>Phô mai</strong>” thơm
              nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
            </p>
          </>
        )}
      </div>

      <div className="lg:px-36 px-12">
        {/* Separate line */}
        <div className="h-[2px] w-full my-6 bg-primary-default rounded"></div>

        {/* Row 1 */}
        <div className="flex">
          <div className="flex justify-between w-full flex-wrap">
            <div>
              {id === '1' && <img src={moodCuNang} alt="" className="w-[250px] lg:w-[250px]" />}
              {id === '2' && <img src={moodDuongMia} alt="" className="w-[250px] lg:w-[250px]" />}
              {id === '3' && <img src={moodDuongDen} alt="" className="w-[250px] lg:w-[250px]" />}
              {id === '4' && <img src={moodDuongDen} alt="" className="w-[250px] lg:w-[250px]" />}
            </div>
            <div>
              <img src={noPreservatives} alt="" className="w-[300px]" />
            </div>
          </div>
        </div>

        {/* Row 2: Thanh phan*/}
        <div className="text-white mt-4">
          Thành phần:
          {id === '1' && (
            <ul className="list-disc ml-5">
              <li>
                Nước tinh khiết, tinh bột khoai mì, tinh bột biến tính (INS 1422), Caramen (INS 150d), củ năng, màu thực
                phẩm (INS 124).
              </li>
              <li>Bảo quản: Đặt trong tủ đông với nhiệt độ dưới -5oC. Tránh tiếp xúc với ánh nắng mặt trời.</li>
              <li>Thời hạn sử dụng: 06 tháng kể từ ngày sản xuất. Ngày sản xuất: In trên bao bì.</li>
              <li>Thông tin cảnh báo: Không dùng khi sản phẩm bị mốc hoặc hết hạn sử dụng.</li>
            </ul>
          )}
          {id === '2' && (
            <ul className="list-disc ml-5">
              <li>Nước tinh khiết, tinh bột khoai mì, tinh bột biến tính (INS 1422), đường mía.</li>
              <li>Bảo quản: Đặt trong tủ đông với nhiệt độ dưới -5oC. Tránh tiếp xúc với ánh nắng mặt trời.</li>
              <li>Thời hạn sử dụng: 06 tháng kể từ ngày sản xuất. Ngày sản xuất: In trên bao bì.</li>
              <li>Thông tin cảnh báo: Không dùng khi sản phẩm bị mốc hoặc hết hạn sử dụng.</li>
            </ul>
          )}
          {id === '3' && (
            <ul className="list-disc ml-5">
              <li>
                Nước tinh khiết, tinh bột khoai mì, tinh bột biến tính (INS 1422), Caramen (INS 150d), đường đen, trà,
                bột kem.
              </li>
              <li>Bảo quản: Đặt trong tủ đông với nhiệt độ dưới -5oC. Tránh tiếp xúc với ánh nắng mặt trời.</li>
              <li>Thời hạn sử dụng: 06 tháng kể từ ngày sản xuất. Ngày sản xuất: In trên bao bì.</li>
              <li>Thông tin cảnh báo: Không dùng khi sản phẩm bị mốc hoặc hết hạn sử dụng.</li>
            </ul>
          )}
          {id === '4' && (
            <ul className="list-disc ml-5">
              <li>
                Nước tinh khiết, tinh bột khoai mì, tinh bột biến tính (INS 1422), Caramen (INS 150d), đường đen, trà,
                bột kem.
              </li>
              <li>Bảo quản: Đặt trong tủ đông với nhiệt độ dưới -5oC. Tránh tiếp xúc với ánh nắng mặt trời.</li>
              <li>Thời hạn sử dụng: 06 tháng kể từ ngày sản xuất. Ngày sản xuất: In trên bao bì.</li>
              <li>Thông tin cảnh báo: Không dùng khi sản phẩm bị mốc hoặc hết hạn sử dụng.</li>
            </ul>
          )}
          {/* {id === '5' && (
            <ul className="list-disc ml-5">
              <li>
                Nước tinh khiết, bột konjac, chất làm dày (INS 407, 1422), chất bảo quản (INS 202), chất điều vị (Acid
                citric).
              </li>
              <li>
                Bảo quản: Nơi khô ráo, thoáng mát từ 5-25oC. Tránh tiếp xúc với ánh nắng mặt trời. Sau khi cắt bao bì,
                nên kẹp kín hoặc cho vào hộp, lọ có nắp bảo quản trong ngăn mát tủ lạnh. Sử dụng tốt nhất khoảng từ 4-6
                giờ nếu bảo quản ở nhiệt độ hường bên ngoài.
              </li>
              <li>Thời hạn sử dụng: 06 tháng kể từ ngày sản xuất. Ngày sản xuất: In trên bao bì.</li>
              <li>Thông tin cảnh báo: Không dùng khi sản phẩm bị mốc hoặc hết hạn sử dụng.</li>
            </ul>
          )} */}
        </div>

        {/* Row 3: Gia tri dinh duong */}
        <div className="flex flex-wrap gap-6 text-white mt-8">
          <div className="w-[350px] text-lg ">
            <p className="text-primary-default text-3xl">Rã đông:</p>
            <div className="flex flex-col justify-between mt-6">
              <div className="flex">
                <div>
                  <img src={defrost01} alt="" className="w-[120px]" />
                </div>
                <div className="ml-8">
                  <img src={defrost02} alt="" className="w-[120px]" />
                </div>
              </div>
              <ul className="list-decimal text-base italic mt-4 ml-6">
                <li>
                  Dùng <strong>kéo cắt nhẹ</strong> cho hở miệng bao.
                </li>
                <li>
                  Đặt <strong>đứng trong tô</strong>, đưa vào lò vi sóng.
                </li>
                <li>
                  Chỉnh <strong>nhiệt độ</strong> cao trong <strong>4 phút.</strong>
                </li>
                <li>Lấy ra cho vào tô, ly, ...cùng thưởng thức.</li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:block h-[400px] w-[2px] bg-[#fff] rounded mr-9"></div>
          <div className="lg:flex-1 text-lg">
            <p className=" text-3xl text-primary-default">Hướng dẫn sử dụng:</p>
            <div className="flex flex-col text-base italic text-center">
              <div className="flex">
                <div className="flex flex-col items-center">
                  <img src={step1} alt="step1" className="h-[200px] pt-[60px]" />
                  <p className="mt-4">1. Đặt bao trân châu tươi vào trong tô lớn</p>
                </div>
                <div className="flex flex-col items-center ml-10">
                  <img src={step2} alt="step2" className="h-[200px] w-[180px]" />
                  <p className="mt-4">2. Đổ 1.5 lít nước đun sôi trên 95oC cho ngập bao</p>
                </div>
              </div>
              <div className="flex mt-4">
                <div className="flex flex-col items-center">
                  <img src={step3} alt="step3" className="h-[120px] w-[190px]" />
                  <p className="mt-4">
                    3. Đậy nắp lại và <strong>chờ trong 05 phút</strong>
                  </p>
                </div>
                <div className="flex flex-col items-center ml-10">
                  <img src={step4} alt="step4" className="" />
                  <p className="mt-4">4. Mở bao, cho ra tô, ly...thưởng thức ngay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-36">
        {/* Separate line */}
        <div className="h-[2px] w-full my-6 bg-primary-default rounded"></div>

        <div className="flex items-end justify-center">
          <div className="w-[425px] flex items-center justify-center">
            <table className="inline-block w-full border-[2px] border-[#fff] rounded p-4 text-white text">
              <thead>
                <tr className="w-full text-center bg-primary-default font-semibold text-black">
                  <th colSpan="3" className="text-lg">
                    Giá trị dinh dưỡng
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-[1px]">
                  <td className="py-1">
                    <strong>Trọng lượng</strong>: <em>350g</em>
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  {/* <td></td> */}
                  <td colSpan={2} className="text-right py-1">
                    <strong>Trên 350g</strong>
                  </td>
                  <td className="inline-block ml-4  py-1">
                    <strong>Trên 100g</strong>
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  <td className="py-1">
                    <strong>Năng lượng</strong>/Calories
                  </td>
                  <td className="text-right">
                    <em>360.5 cal</em>
                  </td>
                  <td className="text-right">
                    <em>103 cal</em>
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  <td className="py-1">
                    <strong>Chất đạm</strong>/Protein
                  </td>
                  <td className="text-right">
                    <em>0.7g</em>
                  </td>
                  <td className="text-right">
                    <em>0.2g</em>
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  <td className="py-1">
                    <strong>Tổng chất béo</strong>/Total fat
                  </td>
                  <td className="text-right">
                    <em>0g</em>
                  </td>
                  <td className="text-right">
                    <em>0g</em>
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  <td className="py-1">
                    <strong>Chất béo bão hòa</strong>/Saturated fat
                  </td>
                  <td className="text-right">
                    <em>0g</em>
                  </td>
                  <td className="text-right">
                    <em>0g</em>
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  <td className="py-1">
                    <strong>Chất béo chuyển hóa</strong>/Trans fat
                  </td>
                  <td className="text-right">
                    <em>0g</em>
                  </td>
                  <td className="text-right">
                    <em>0g</em>
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  <td className="py-1">
                    <strong>Carbohydrate</strong>
                  </td>
                  <td className="text-right">
                    <em>89.25g</em>
                  </td>
                  <td className="text-right">
                    <em>25.5g</em>
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  <td className="py-1">
                    <strong>Đường</strong>/Sugars
                  </td>
                  <td className="text-right">
                    <em>5.6g</em>
                  </td>
                  <td className="text-right">
                    <em>1.6g</em>
                  </td>
                </tr>
                <tr className="border-b-[1px]">
                  <td className="py-1">
                    <strong>Natri</strong>/Sodium
                  </td>
                  <td className="text-right">
                    <em>31.5mg</em>
                  </td>
                  <td className="text-right">
                    <em>9mg</em>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ml-20">
            <img src={certificate} alt="" className="w-40" />
          </div>
        </div>
      </div>

      {/* Selling Products */}
      <div className="mt-10 px-36">
        <ProductsComponent title="Sản phẩm bán chạy" productData={dummyData} />
      </div>

      {/* See more */}
      <div className="flex items-center justify-center flex-col gap-6">
        <p className="text-white text-2xl">Xem thêm</p>
        <input type="text" placeholder="Add a comment" className="lg:w-[750px] w-full py-4 px-6 rounded" />
      </div>
    </div>
  );
};

export default Product;
