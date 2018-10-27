const initialData = {
  stages: {
    'pitching': {
      id: 'pitching',
      title: 'Pitching',
      projectIds: ['project-1', 'project-2'],
    },
    'ongoing': {
      id: 'ongoing',
      title: 'Ongoing',
      projectIds: ['project-3'],
    },
    'post-production': {
      id: 'post-production',
      title: 'Post Production',
      projectIds: ['project-4'],
    },
    'completed': {
      id: 'completed',
      title: 'Completed',
      projectIds: [],
    }
  },
  stageOrder: ['pitching', 'ongoing', 'post-production', 'completed'],
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
