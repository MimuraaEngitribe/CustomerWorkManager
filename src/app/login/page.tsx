'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const router = useRouter();

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここで認証を行います。成功したらダッシュボードにリダイレクトします。
    // router.push({
    //   pathname: '/require_list',
    //   query: { email: email, password: password },
    // });
  };

  useEffect(() => {
    // Any side effects here
  }, [email, password]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
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