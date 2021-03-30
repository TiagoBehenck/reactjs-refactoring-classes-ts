import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Food } from '../../@types/food';

import { Modal, Input } from '../'

import { Form } from './styles';
import { FormHandles } from '@unform/core';

interface ModalEditProps {
  isOpen: boolean
  setIsOpen: () => void;
  handleUpdateFood: (food: Food) => void;
  editingFood: Food
}

export function ModalEditFood({ isOpen, setIsOpen, handleUpdateFood, editingFood }: ModalEditProps) {
  const formRef = createRef<FormHandles>();

  const handleSubmit = async (data: Food) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
