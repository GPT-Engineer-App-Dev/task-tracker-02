import { Container, Heading, VStack, Input, IconButton, List, ListItem, Checkbox, HStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading mb={4}>Todo App</Heading>
        <HStack width="100%">
          <Input
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IconButton
            aria-label="Add task"
            icon={<FaPlus />}
            onClick={handleAddTask}
          />
        </HStack>
        <List width="100%" spacing={2}>
          {tasks.map((task) => (
            <ListItem key={task.id} display="flex" alignItems="center" justifyContent="space-between">
              <Checkbox isChecked={task.completed} onChange={() => handleToggleTask(task.id)}>
                {task.text}
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => handleDeleteTask(task.id)}
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;