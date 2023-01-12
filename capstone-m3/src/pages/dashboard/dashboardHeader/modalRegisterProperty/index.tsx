import { useForm } from "react-hook-form";
import { StyledModalRegisterProperty } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { BtnRegistration } from "./btnRegistration/style";
export interface iProviderRegistration {
  img: string;
  address: string;
  city: string;
  price: string;
  description: string;
  title: string;
  street: string;
  number: string;
  cadastroImovel: (body: iProviderRegistration) => void;
}
function ModalRegisterProperty() {
  const { setRegisterModal, createState } = useContext(UserContext);

  const Schema = yup.object().shape({
    img: yup.string().required("O nome é obrigatório!"),


    city: yup.string().required("A cidade é obrigatória!"),

    price: yup.string().required("O preço é obrigatório!"),

    description: yup.string().required("A descrição é obrigatória!"),
    title: yup.string().required("O título é obrigatório!"),
    street: yup.string().required("A rua é obrigatória!"),
    number: yup.string().required("O número é obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iProviderRegistration>({
    resolver: yupResolver(Schema),
  });

  function submit(formData: iProviderRegistration) {
    console.log('foi')
    createState(formData);
  }

  return (
    <StyledModalRegisterProperty>
      <div className="divMain">
        <div className="divtitle">
          <p className="title">Formulário de cadastro</p>
          <p onClick={() => setRegisterModal(false)} className="btnCloseModal">
            X
          </p>
        </div>

        <form noValidate onSubmit={handleSubmit(submit)}>
          <div className="divInput">
            <p className="erro">{errors.img && errors.img.message}</p>
            <label>
              {" "}
              <span>Adicione fotos do imóvel</span>
              <input type="text" {...register("img")} />
            </label>

            

            <p className="erro">{errors.price && errors.price.message}</p>
            <label>
              {" "}
              <span>Preço</span>
              <input
                type="text"
                placeholder="R$"
                {...register("price")}
              ></input>
            </label>

            <p className="erro">
              {errors.description && errors.description.message}
            </p>
            <label>
              {" "}
              <span>Faça uma breve descrição do imóvel</span>
              <textarea {...register("description")}></textarea>
            </label>

            <p className="erro">{errors.title && errors.title.message}</p>
            <label>
              {" "}
              <span>Digite um título para o imóvel</span>
              <textarea {...register("title")}></textarea>
            </label>

            <p className="erro">{errors.city && errors.city.message}</p>
            <label>
              {" "}
              <span>Cidade</span>
              <input type="text" {...register("city")}></input>
            </label>

            <p className="erro">{errors.street && errors.street.message}</p>
            <label>
              {" "}
              <span>Rua</span>
              <textarea {...register("street")}></textarea>
            </label>

            <p className="erro">{errors.number && errors.number.message}</p>
            <label>
              {" "}
              <span>Número</span>
              <textarea {...register("number")}></textarea>
            </label>
          </div>
          <BtnRegistration type="submit" className="btnCadastro">
            Cadastrar
          </BtnRegistration>
        </form>
      </div>
    </StyledModalRegisterProperty>
  );
}

export default ModalRegisterProperty;
