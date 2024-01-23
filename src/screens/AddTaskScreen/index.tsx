import { AppHeader, Box, ButtonComp, Container, Separator, TextComp, TextInputField } from '@/components';
import { Colors, Styles } from '@/constants';
import { TaskModel } from '@/models/TaskModel';
import { logger } from '@/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { SaveAdd } from 'iconsax-react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import * as yup from 'yup';

const initValue: TaskModel.TaskInfo = {
  title: '',
  description: '',
  dueDate: '',
  startTime: '',
  endTime: '',
  uids: [],
  fileUrls: [],
};

type TaskForm = Omit<TaskModel.TaskInfo, 'uids' | 'fileUrls'>;

const schame = yup.object().shape({
  title: yup.string().required('Title not empty'),
  description: yup.string().required('Description not empty'),
  dueDate: yup.string().required('Due date not empty'),
  startTime: yup.string().required('Start time not empty'),
  endTime: yup.string().required('End time not empty'),
});

const AddTaskScreen: React.FC = () => {
  const { control, handleSubmit } = useForm<TaskForm>({
    defaultValues: initValue,
    resolver: yupResolver(schame),
  });

  const handleSave = (data: TaskForm) => {
    logger.log('handleSubmit', data);
  };

  return (
    <Container>
      <AppHeader showBack title="Add new task" />
      <ScrollView>
        <Box gap={15} variant="main">
          <View>
            <TextComp size={16} font="semi" text="Title" />
            <TextInputField allowClear name="title" placeholder="Enter title of task" control={control} />
          </View>

          <View>
            <TextComp size={16} font="semi" text="Description" />
            <TextInputField
              multiline
              allowClear
              control={control}
              name="description"
              placeholder="Enter description of task"
            />
          </View>
        </Box>
      </ScrollView>

      <ButtonComp
        style={Styles.mh16}
        title="Add new task"
        onPress={handleSubmit(handleSave)}
        icon={<SaveAdd size="18" color={Colors.white} />}
      />

      <Separator safeBottom />
    </Container>
  );
};

export default AddTaskScreen;
