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

  const formDataToSend = new FormData();
  formDataToSend.append("nome", nome);
  formDataToSend.append("presenca", presenca);

  try {
    const response = await api.post("/send", formDataToSend, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.status === 200) {
      window.alert("Email enviado com sucesso!");
    } else {
      window.alert("Falha ao enviar o email. Por favor, tente novamente.");
    }

    return response;
  } catch (error) {
    console.error("Erro ao enviar o email:", error);
    window.alert("Falha ao enviar o email. Por favor, tente novamente.");
    throw error;
  }
};
