import axios from "axios";

export const api = axios.create({
  baseURL: "https://beackend-formatura.onrender.com",
});

interface propsFormData {
  nome: string;
  presenca: string;
}

export const enviarEmail = async (formData: propsFormData) => {
  const { nome, presenca  } = formData;

  const dataToSend = {
    nome,
    presenca
  }

  try{
    const response = await api.post("/send", dataToSend)

    if (response.status === 200) {
      window.alert("Email enviado com sucesso!");
    } else {
      window.alert("Falha ao enviar o email. Por favor, tente novamente.");
    }

    return response.data
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    window.alert("Falha ao enviar o email. Por favor, tente novamente.");
    throw error;
  }
}