import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Input, Form } from '@rocketseat/unform';
import { Container, Content, Items, Nav } from '../_layouts/list/styles';
import { Modal } from '../../components/Modal';

import {
  loadAllHelpordersRequest,
  loadOneHelporderRequest,
  createAnswerHelporderRequest,
} from '../../store/modules/helporders/actions';

export default function HelpOrders() {
  const dispatch = useDispatch();
  const helporders = useSelector(state => state.helporder.allhelporders) || [];
  const [showModal, setShowModal] = useState(false);
  const [onehelp] = useSelector(state => state.helporder.helporder) || [];
  const [question, setQuestion] = useState('');

  useEffect(() => {
    dispatch(loadAllHelpordersRequest());
  }, []); // eslint-disable-line

  function handleOpenModal(id) {
    dispatch(loadOneHelporderRequest(id));
    setShowModal(!showModal);
    if (onehelp) {
      setQuestion(onehelp.question);
    } else {
      toast.warn('Dados estão sendo carregados');
    }
  }

  function hideModal() {
    setShowModal(!showModal);
  }

  function handleAnswer({ answer }) {
    dispatch(createAnswerHelporderRequest(answer, onehelp.id));
  }

  return (
    <Container>
      <Content>
        <Nav>
          <strong>Pedidos de auxílio</strong>
        </Nav>

        <Modal show={showModal} handleClose={hideModal}>
          <Form onSubmit={handleAnswer}>
            <p>Pergunta do Aluno</p>
            <p className="question">{question}</p>
            <p>Sua resposta</p>
            <Input name="answer" type="text" />
            <button type="submit" onClick={hideModal}>
              Responder Aluno
            </button>
          </Form>
        </Modal>

        <Items>
          <table>
            <thead>
              <tr>
                <th className="align-left">ALUNO</th>
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <th />
              </tr>
            </thead>
            <tbody>
              {helporders.map(help => (
                <tr key={help.id}>
                  <td className="align-left">{help.student.name}</td>
                  <td className="answer">
                    <button
                      className="help"
                      type="button"
                      onClick={() => handleOpenModal(help.id)}
                    >
                      Responder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Items>
      </Content>
    </Container>
  );
}
