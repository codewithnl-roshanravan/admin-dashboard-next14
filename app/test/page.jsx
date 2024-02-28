
const Page = () => {
  const [input, setInput] = useState("");
  
  const handleForm = async(formData)=>{
    "use server"
    const username = formData.get("username")
  }

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>send</button>
      </form>
    </div>
  );
};

export default Page;
