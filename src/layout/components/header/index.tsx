import React from "react";

export default function Header() {
  return (
    <div>
      <div className="h-10 mx-10 rounded-b-full max-sm:hidden bg-gray-400">
        <div className="flex justify-center items-center py-2">
          <label
            className="text-black font-bold text-md"
            htmlFor=""
          >{`ติดต่อสายด่วนเทคโนโลยีสารสนเทศ (ITสำนักงานใหญ่) เวลาทำการ จ-ศ 08:30-17:30`}</label>
        </div>
      </div>
      <div className="h-10 bg-gray-200 sm:hidden">
        <div className="flex justify-center items-center py-2">
          <label
            className="text-black font-bold text-md"
            htmlFor=""
          >{`ติดต่อสายด่วนเทคโนโลยีสารสนเทศ (ITสำนักงานใหญ่) เวลาทำการ จ-ศ 08:30-17:30`}</label>
        </div>
      </div>
    </div>
  );
}
