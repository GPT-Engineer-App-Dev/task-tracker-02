import { useState } from "react";
import { Container, Input, Button, VStack, HStack, Text } from "@chakra-ui/react";

const Index = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Text fontSize="2xl" mb={4}>Todo List</Text>
        <HStack w="100%">
          <Input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <Button onClick={handleAddTask}>Add</Button>
        </HStack>
        <VStack spacing={2} w="100%">
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" justifyContent="space-between">
              <Text>{task}</Text>
              <Button colorScheme="red" onClick={() => handleDeleteTask(index)}>Delete</Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;