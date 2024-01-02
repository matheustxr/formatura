import { useRef, FormEvent, ChangeEvent, useState } from "react";
import { enviarEmail } from "../../api/api.js";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface FormData {
  nome: string;
  presenca: string
}

const options = [
  {option: "Escolha uma das opções"},
  {option: "Irei comparecer"},
  {option: "Infelizmente não poderei comparecer"},
]

export const Formulario = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    presenca: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      setIsSending(true)
      await enviarEmail(formData);
      console.log(formData)
    } catch (error) {
      console.error("Something is wrong", error);
    } finally{
      setIsSending(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="w-[85%] flex flex-col ">
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        required
        onChange={handleChange}
        className="mb-5 h-[50px]  md:max-w-none md:w-[600px] rounded text-black "
      />

      <label className="font-bold" htmlFor="presenca">Confirme sua presença:</label>
      <select 
        name="presenca"
        required
        value={formData.presenca}
        onChange={handleSelectChange}
        id="presenca"
        className="mb-5 w-[100%]  h-[50px]  md:w-[600px] xl:w-[600px] bg-gray-200  rounded text-black px-2"
      >
        {
          options.map( (option) => <option key={option.option}>{option.option}</option>)
        }
        
      </select>

      <Button
        type="submit"
        variant="contained"
        className={
          isSending
          ? "bg-slate-400"
          : "text-black hover:text-white md:max-w-none bg-[#1deaf8]  hover:bg-[#1e4444]  transition-all duration-200 mt-5"
        }
        endIcon={<SendIcon />}
        disabled={isSending}
      >
        {
          isSending ? "Enviando" : "Enviar"
        }
      </Button>
    </form>
  );
};
