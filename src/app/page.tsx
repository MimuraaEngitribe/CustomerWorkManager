'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const router = useRouter();
  // TODO:submit後の処理は遷移先のページ作成後にコメントアウトを除去する
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // ここで認証を行います。成功したらダッシュボードにリダイレクトします。
  //   router.push('/dashboard');
  // };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <label>メールアドレス</label>
        </div><div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
            <label>パスワード</label>
        </div><div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}