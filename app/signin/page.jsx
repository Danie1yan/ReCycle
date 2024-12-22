"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthPage = () => {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loginError, setLoginError] = useState('');

  const handleRegister = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    setRegisteredUsers([...registeredUsers, { email, password }]);
    setIsRegistering(false); // Switch to login after registration
    setEmail("");
    setPassword("");

    console.log([...registeredUsers, { email, password }]);
  };

  const handleLogin = () => {
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      router.push('/main');
    } else {
      setLoginError('Invalid email or password.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">

        <h1 className='text-4xl font-bold'>Recycle</h1>

      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="flex justify-between mb-6">
          <button
            className={`px-4 py-2 rounded-md ${!isRegistering ? 'text-gray-600' : 'bg-gray-200'}`}
            onClick={() => setIsRegistering(true)}
          >
            Sign In
          </button>
          <button
            className={`px-4 py-2 rounded-md ${isRegistering ? 'text-gray-600' : 'bg-gray-200'}`}
            onClick={() => setIsRegistering(false)}
          >
            Sign Up
          </button>
        </div>

        {isRegistering ? (
          <div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 mb-4 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {loginError && <p className="text-red-500 mb-3">{loginError}</p>}
            
            <button
              className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
              onClick={handleLogin}
            >
              Sign In
            </button>
            
          </div>
        ) : (
          <div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 mb-4 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end">
              <a href="#" className="text-sm text-gray-600 hover:underline mb-6">
                Forgot password?
              </a>
            </div>
            <button
              className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
              onClick={handleRegister}
            >
              Sign Up
            </button>

            <div className="text-center mt-6 text-gray-600">Or Login with</div>
            <div className="flex justify-around mt-4">
              <button className="bg-white border rounded-full p-2">F</button>
              <button className="bg-white border rounded-full p-2">G</button>
              <button className="bg-white border rounded-full p-2"></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
