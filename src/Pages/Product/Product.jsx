import React from 'react';
import milkTea from '../../Assets/milktea-banner.png';
import moodDuongDen from '../../Assets/mood-duongden.png';
import noPreservatives from '../../Assets/no-preservatives.png';
// Hướng dẫn sử dụng
import defrost01 from '../../Assets/defrost01.png';
import defrost02 from '../../Assets/defrost02.png';
import step1 from '../../Assets/step1.png';
import step2 from '../../Assets/step2.png';
import step3 from '../../Assets/step3.png';
import step4 from '../../Assets/step4.png';

import certificate from '../../Assets/certificate.png';

import ProductsComponent from '../../Components/ProductsComponent/ProductsComponent';
// List product
import cunang from '../../Assets/cunang.png';
import duongmia from '../../Assets/duongmia.png';
import duongden from '../../Assets/duongden.png';
import trasua from '../../Assets/trasua.png';
import tranchau3Q from '../../Assets/3Q.png';

const dummyData = [
  {
    id: 1,
    title: 'Trân châu tươi củ năng',
    img: cunang,
    price: 25000,
  },
  {
    id: 2,
    title: 'Trân châu tươi đường mía',
    img: duongmia,
    price: 25000,
  },
  {
    id: 3,
    title: 'Trân châu tươi đường đen',
    img: duongden,
    price: 25000,
  },
  {
    id: 4,
    title: 'Trà sữa trân châu tươi đường đen',
    img: trasua,
    price: 25000,
  },
  {
    id: 5,
    title: 'Trân châu trắng 3Q',
    img: tranchau3Q,
    price: 25000,
  },
];

const Product = () => {
  return (
    <div className="bg-background-main lg:px-36 lg:pb-10 px-10 pb-10">
      <div className="flex flex-col overflow-hidden items-center justify-center">
        <img src={milkTea} alt="" className="w-[500px] lg:w-[700px] mt-8" />
        {/* <p>Trà sữa</p> */}
        <p className="text-primary-default text-center text-xl leading-relaxed mt-8">
          Hãy thưởng cho mình một ly <strong>Trà sữa trân châu tươi</strong> ăn liền vị “<strong>Đường đen</strong>”
          thơm nồng, bổ sung năng lượng, phù hợp sức khỏe với <strong>một phong cách độc đáo</strong>.
        </p>
      </div>

      {/* Separate line */}
      <div className="h-[2px] w-full my-6 bg-primary-default rounded"></div>

      <div>
        {/* Row 1 */}
        <div className="flex">
          <div className="flex justify-between w-full flex-wrap">
            <div>
              <img src={moodDuongDen} alt="" className="w-[250px] lg:w-[250px]" />
            </div>
            <div>
              <img src={noPreservatives} alt="" className="w-[300px]" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="text-white mt-4">
          Thành phần:
          <ul className="list-disc ml-5">
            <li>
              Nước tinh khiết, tinh bột khoai mì, tinh bột biến tính (INS 1422), Caramen (INS 150d), đường đen, trà, bột
              kem.
            </li>
            <li>Bảo quản: Đặt trong tủ đông với nhiệt độ dưới -5oC. Tránh tiếp xúc với ánh nắng mặt trời.</li>
            <li>Thời hạn sử dụng: 06 tháng kể từ ngày sản xuất. Ngày sản xuất: In trên bao bì.</li>
            <li>Thông tin cảnh báo: Không dùng khi sản phẩm bị mốc hoặc hết hạn sử dụng.</li>
          </ul>
        </div>

        {/* Row 3 */}
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
            <p className=" text-3xl">Hướng dẫn sử dụng:</p>
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

      {/* Selling Products */}
      <div className="mt-10">
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
