"use client";

import { useState } from 'react';
import 'tailwindcss/tailwind.css'

export default function Home() {
  const [selectExternalWorker, setselectExternalWorker] = useState('');
  const [selectLabel, setselectLabel] = useState('');
  const [selectDepartment, setselectDepartment] = useState('');
  const [selectListNum, setselectListNum] = useState('');
  const [selectInternalWorkerStatus, setselectInternalWorkerStatus] = useState('');

  
  const handleChange_SelectExternalWorker = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectExternalWorker(e.target.value);
  };

  const handleChange_SelectLabel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectLabel(e.target.value);
  };

  const handleChange_SelectDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectDepartment(e.target.value);
  };

  const handleChange_SelectListNum = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectListNum(e.target.value);
  };
  
  const handleChange_SelectInternalWorkerStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectInternalWorkerStatus(e.target.value);
  };

  return (

    <main className="flex flex-col min-h-screen py-2 bg-gray-200">
      <title>
          案件-一覧
      </title>
      <h1 className="text-3xl font-bold ">
          案件-一覧
      </h1>
      <div className='flex flex-col items-center justify-center min-h-full'>
        <div className="grid grid-cols-2 w-1/2 gap-4 bg-white shadow-xl devide-y divide-blue-200 p-5 rounded-md">
          <label id="Company">顧客企業名</label>
          <textarea id="Company" rows="1" className="block px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring focus:ring-blue-300" placeholder="企業名"></textarea>

          <label for="CompanyDetail">詳細</label>
          <textarea id="CompanyDetail" rows="4" className="block px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring focus:ring-blue-300" placeholder="詳細を記載"></textarea>

          <label for="RelativeFileLink">関連ファイルリンク</label>
          <textarea id="RelativeFileLink" rows="1" className="block px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring focus:ring-blue-300" placeholder="リンク"></textarea>

          <label for="Worker">担当者</label>
          <select id="Worker" className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectExternalWorker} onChange={handleChange_SelectExternalWorker}>
                <option value="">選択してください</option>
                <option value="worker1">担当者A</option>
                <option value="worker2">担当者B</option>
                <option value="worker3">担当者C</option>
          </select>

          <label>期限</label>
          <div className="grid grid-cols-1">
            <label for="Label">ラベル名</label>
            <select id="Label" className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectLabel} onChange={handleChange_SelectLabel}>
                <option value="">選択してください</option>
                <option value="worker1">ラベルA</option>
                <option value="worker2">ラベルB</option>
                <option value="worker3">ラベルC</option>
            </select>
            <label for="start-day">開始日</label>
            <textarea id="start-day" rows="1" className="block px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring focus:ring-blue-300" placeholder="日付"></textarea>
            
            <label for="end-day">終了日</label>
            <textarea id="end-day" rows="1" className="block px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring focus:ring-blue-300" placeholder="日付"></textarea>
          </div>

          <button className="bg-yellow-300 hover:bg-yellow-500 text-white font-bold col-span-2 justify-center mx-10">ラベル追加</button>

          <label for="registed-day">登録日</label>
          <textarea id="registed-day" rows="1" className="block px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring focus:ring-blue-300" placeholder="日付"></textarea>

          <label for="status">ステータス</label>
          <select className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectInternalWorkerStatus} onChange={handleChange_SelectInternalWorkerStatus}>
                <option value="">選択してください</option>
                <option value="wokerStatus1">未配属</option>
                <option value="wokerStatus2">配属</option>
          </select>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold col-span-2 justify-center mx-10">更新</button>
          <button className="bg-red-200 hover:bg-red-300 text-white font-bold col-span-2 justify-center mx-10">削除</button>
        </div>
      </div>
    </main>
  );
}