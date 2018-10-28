const initialData = {
  stages: {
    'planning': {
      id: 'planning',
      title: 'Planning',
      projectIds: ['project-1', 'project-2'],
    },
    'in-progress': {
      id: 'in-progress',
      title: 'In Progress',
      projectIds: ['project-3'],
    },
    'testing': {
      id: 'testing',
      title: 'Testing',
      projectIds: ['project-4'],
    },
    'completed': {
      id: 'completed',
      title: 'Completed',
      projectIds: [],
    }
  },
  stageOrder: ['planning', 'in-progress', 'testing', 'completed'],
  projects: {
    'project-1': {
      id: 'project-1',
      title: 'Project 1',
      description: 'Some description about Project 1',
    },
    'project-2': {
      id: 'project-2',
      title: 'Project 2',
      description: 'This project is gonna be interesting',
    },
    'project-3': {
      id: 'project-3',
      title: 'Project 3',
      description: 'This project might take some time',
    },
    'project-4': {
      id: 'project-4',
      title: 'Project 4',
      description: 'Wooho! Million dollar idea!',
    },
  },
}

export default initialData;
