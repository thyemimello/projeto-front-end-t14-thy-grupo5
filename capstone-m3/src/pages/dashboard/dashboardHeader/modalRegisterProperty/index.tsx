import { useForm } from 'react-hook-form';
import { StyledModalRegisterProperty } from './style'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import { BtnRegistration } from './btnRegistration/style';

function ModalRegisterProperty() {
    const {setRegisterModal} =useContext(UserContext)
    interface iProviderRegistration {
        img: string;
        address: string;
        city: string;
        price: string;
        description: string;
        cadastroImovel: (body: iProviderRegistration) => void;
      }
      const Schema = yup.object().shape({
        img: yup
          .string()
          .required("O nome é obrigatório!"),
          
          address: yup
          .string()
          .required("O endereço é obrigatório!"),
          
          city: yup
          .string()
          .required("A cidade é obrigatória!"),
    
          price: yup
          .string()
          .required("O preço é obrigatório!"),
    
          description: yup
          .string()
          .required("A descrição é obrigatória!"),
          
      });
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<iProviderRegistration>({
        resolver: yupResolver(Schema),
      });
      function submit(formData:any) {

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

        <form onSubmit={handleSubmit(submit)}>
          <div className="divInput">
            <p className="erro">{errors.img && errors.img.message}</p>
            <label>
              {" "}
              <span>Adicione fotos do imóvel</span>
              <input type="file" {...register("img")} />
            </label>

            <p className="erro">{errors.address && errors.address.message}</p>
            <label>
              {" "}
              <span>Endereço</span>
              <input type="text" {...register("address")} />
            </label>

            <p className="erro">{errors.city && errors.city.message}</p>
            <label>
              {" "}
              <span>Cidade</span>
              <input type="text" {...register("city")}></input>
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
          </div>
          <BtnRegistration type="submit" className="btnCadastro">
            Cadastrar
          </BtnRegistration>
        </form>
      </div>
    </StyledModalRegisterProperty>
  )
}

export default ModalRegisterProperty