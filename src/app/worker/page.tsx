"use client";
import { useState } from 'react';

export default function NewPage() {
  const [selectCompany, setselectCompany] = useState('');
  const [selectTerm, setselectTerm] = useState('');
  const [selectListNum, setselectListNum] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectStatus, setSelectStatus] = useState('');

  const handleChange_SelectCompany = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectCompany(e.target.value);
  };

  const handleChange_SelectTerm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectTerm(e.target.value);
  };

  const handleChange_SelectListNum = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectListNum(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleChange_SelectStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectStatus(e.target.value);
  };

  return (
    <main className="flex flex-col min-h-screen py-2 bg-gray-200">
        <title>
            案件-担当
        </title>
        <h1 className="text-3xl font-bold ">
            案件-担当
        </h1>
        <div className='flex flex-col items-center justify-center min-h-full'>
        <div className="grid grid-cols-2 w-1/2 gap-4 bg-white shadow-xl devide-y divide-blue-200 p-5 rounded-md">
          <label>顧客企業名</label>
          <select className="focus:ring focus:ring-blue-300" value={selectCompany} onChange={handleChange_SelectCompany}>
              <option value="">選択してください</option>
              <option value="option1">企業1</option>
              <option value="option2">企業2</option>
              <option value="option3">企業3</option>
          </select>
          <label for="Detail">詳細</label>
          <textarea id="Detail" rows="4" className="block px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring focus:ring-blue-300" placeholder="詳細を記載"></textarea>
          <label>期間</label>
          <select className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectTerm} onChange={handleChange_SelectTerm}>
                <option value="">選択してください</option>
                <option value="term1">最新</option>
                <option value="term2">今月</option>
                <option value="term3">先月</option>
                <option value="term4">期間限定</option>
          </select>
          <label>開始日</label>
          <input type="date" value={startDate} onChange={handleStartDateChange} className="border-2 border-gray-300 focus:ring focus:ring-blue-300" />
          <label>終了日</label>
          <input type="date" value={endDate} onChange={handleEndDateChange} className="border-2 border-gray-300 focus:ring focus:ring-blue-300" />
          <label>ステータス</label>
          <select className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectStatus} onChange={handleChange_SelectStatus}>
            <option value="">選択してください</option>
            {/* Add options here */}
          </select>
          <label>件数</label>
          <select className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectListNum} onChange={handleChange_SelectListNum}>
            <option value="">選択してください</option>
            {/* Add options here */}
          </select>
          <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold col-span-2 justify-center mx-10">表示</button>
        </div>
      </div>
    </main>
  );
}