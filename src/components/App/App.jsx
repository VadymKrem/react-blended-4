import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
  TodoList,
} from 'components';
import { useSelector } from 'react-redux';

export const App = () => {
  const todos = useSelector(state => state.todos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          {todos.length === 0 ? (
            <Text textAlign="center">There are no any todos ... </Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
