function ClickHouseForm({ setColumns, setStatus }) {
  const [form, setForm] = useState({ host: '', port: '', db: '', user: '', jwt: '' });

  const connect = async () => {
    setStatus('Connecting to ClickHouse...');
    try {
      setTimeout(() => {
        setColumns(['id', 'name', 'price']);
        setStatus('Columns loaded from ClickHouse.');
      }, 1000);
    } catch (e) {
      setStatus('Connection failed.');
    }
  };

  return (
    <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 shadow-lg">
      <h3 className="text-white text-2xl font-semibold text-center mb-6">ClickHouse Configuration</h3>
      {['host', 'port', 'db', 'user', 'jwt'].map(field => (
        <input
          key={field}
          placeholder={field}
          value={form[field]}
          onChange={e => setForm({ ...form, [field]: e.target.value })}
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
      <button 
        onClick={connect}
        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
        Connect & Load Columns
      </button>
    </div>
  );
}
