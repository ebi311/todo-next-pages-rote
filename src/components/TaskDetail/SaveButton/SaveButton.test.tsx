import { Task } from '@/models/task';
import { render as _render, screen, waitFor } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { SaveButton } from './SaveButton';

global.fetch = jest.fn();

const task: Task = {
  id: '123',
  title: 'title',
  body: 'body',
  priority: 'low',
  status: 'todo',
  deadline: new Date(),
};

const HF = () => {
  const formMethods = useForm({
    defaultValues: task,
  });
  return (
    <FormProvider {...formMethods}>
      <SaveButton />
    </FormProvider>
  );
};

const render = () => {
  return _render(<HF />);
};

test('renders', () => {
  render();
  const saveButton = screen.getByRole('button', { name: 'save' });
  expect(saveButton).toBeInTheDocument();
});

test('click save button', async () => {
  render();
  const saveButton = screen.getByRole('button', { name: 'save' });
  saveButton.click();
  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  });
});
