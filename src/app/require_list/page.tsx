"use client";

import { useState } from 'react';
import 'tailwindcss/tailwind.css'

export default function Home() {
  const [selectCompany, setselectCompany] = useState('');
  const [selectTerm, setselectTerm] = useState('');
  const [selectWorker, setselectWorker] = useState('');
  const [selectWorkerStatus, setselectWorkerStatus] = useState('');
  const [selectDepartment, setselectDepartment] = useState('');

  const handleChange_SelectCompany = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectCompany(e.target.value);
  };
  const handleChange_SelectTerm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectTerm(e.target.value);
  };

  const handleChange_SelectWorker = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectWorker(e.target.value);
  };

  const handleChange_SelectWorkerStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectWorkerStatus(e.target.value);
  };

  const handleChange_SelectDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setselectDepartment(e.target.value);
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
          <label>顧客企業名</label>
          <select className="focus:ring focus:ring-blue-300" value={selectCompany} onChange={handleChange_SelectCompany}>
              <option value="">選択してください</option>
              <option value="option1">企業1</option>
              <option value="option2">企業2</option>
              <option value="option3">企業3</option>
          </select>
          <label for="message">詳細</label>
          <textarea id="message" rows="4" className="block px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring focus:ring-blue-300" placeholder="詳細を記載"></textarea>
          <label>期間</label>
          <div className="grid grid-cols-1">
            <label>ラベル名</label>
            <select className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectTerm} onChange={handleChange_SelectTerm}>
                <option value="">選択してください</option>
                <option value="term1">最新</option>
                <option value="term2">今月</option>
                <option value="term3">先月</option>
                <option value="term4">期間限定</option>
            </select>
            <label>開始日</label>
            <input className="border-2 border-gray-300 focus:ring focus:ring-blue-300"></input>
            <label>終了日</label>
            <input className="border-2 border-gray-300 focus:ring focus:ring-blue-300"></input>
          </div>
          <label>当社担当者</label>
          <select className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectWorker} onChange={handleChange_SelectWorker}>
                <option value="">選択してください</option>
                <option value="term1">新井</option>
                <option value="term2">乾</option>
                <option value="term3">臼井</option>
                <option value="term4">榎</option>
            </select>
          <label>ステータス</label>
          <select className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectWorkerStatus} onChange={handleChange_SelectWorkerStatus}>
                <option value="">選択してください</option>
                <option value="wokerStatus1">未配属</option>
                <option value="wokerStatus2">配属</option>
          </select>
          <label>件数</label>
          <select className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectWorkerStatus} onChange={handleChange_SelectWorkerStatus}>
                <option value="">選択してください</option>
                <option value="showListNum1">20件ずつ</option>
                <option value="showListNum2">50件ずつ</option>
                <option value="showListNum3">100件ずつ</option>
          </select>
          <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold col-span-2 justify-center mx-10">表示</button>
          <label>部署名</label>
          <select className="border border-slate-300 focus:ring focus:ring-blue-300" value={selectDepartment} onChange={handleChange_SelectDepartment}>
                <option value="">選択してください</option>
                <option value="depart1">部署A</option>
                <option value="depart2">部署B</option>
                <option value="depart3">部署C</option>
          </select>
        </div>
      </div>
    </main>
  );
}