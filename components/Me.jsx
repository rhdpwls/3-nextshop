import Link from "next/link";
import React from "react";
import pic from '../public/images/pic.jpg';
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          간단한 소개
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            안녕하세요. 저는 중부대 정보보호학과를 다니고 있는 22살 고예진이라고 합니다.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            저는 고등학교 3학년때 코딩특강을 통해 처음 파이썬을 배우게 되었습니다.<br/>
            그때의 배움이 제가 정보보호학과를 선택할 수 있게 해주었습니다. 
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          현재 학과를 다니면서 자료구료, 알고리즘, 운영체제, 웹서버 구현 등 배우는 것이 다양해지고 어려움이 있지만 고민하고 찾아보고 물어보면서 열심히 배우고 있습니다.<br/>
          앞으로도 노력하는 학생되겠습니다.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              홈으로
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              포트폴리오
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
