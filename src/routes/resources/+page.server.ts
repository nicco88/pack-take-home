import type { RowT, } from "$lib/models/table.models";
import type { PageServerLoad } from "./$types";

const formatDateTime = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const fetchAnalyticsData = async (): Promise<Record<string, any>> => {

  return {
    activeUsersAccessRate: 37,
    resourcesUtilized: 67,
    resourcesUploaded: {
      total: 1150,
      trend: 4,
    },
    completionRate: {
      total: 45,
      trend: -10
    },
    uniqueAccesses: {
      partial: 395,
      total: 582,
      trend: 3
    },
    resourcesByCategory: {
      first: 70,
      second: 20,
      third: 10
    },
    pieData: [
      {
        value: 10,
        category: 'Category'
      },
      {
        value: 20,
        category: 'Category'
      },
      {
        value: 70,
        category: 'Category'
      },
    ],
    mostUsedResources: [
      {
        title: 'How to lead new teams',
        link: '',
        trend: null
      },
      {
        title: 'How to be more direct',
        link: '',
        trend: null
      },
      {
        title: 'The secret to giving great feedback',
        link: '',
        trend: 'down'
      }
    ],
    mostUsedResources2: [
		{
			title: 'Conflict Resolution',
			link: '',
			trend: null
		},
		{
			title: 'How to stay motivated',
			link: '',
			trend: 'up'
		},
		{
			title: 'Work life balance',
			link: '',
			trend: 'down'
		}
	]
  }
}

const fetchTableContent = async (): Promise<RowT[]> => {
  return [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'Role',
      avatar: 'https://i.pravatar.cc/150?img=49',
      accessedContent: 'Conflict Resolution',
      openedOn: formatDateTime(new Date()),
      closedOn: formatDateTime(new Date()),
      provider: 'Pack',
      providerStyle: 'primary'
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'Role',
      avatar: 'https://i.pravatar.cc/150?img=49',
      accessedContent: 'Conflict Resolution',
      openedOn: formatDateTime(new Date()),
      closedOn: formatDateTime(new Date()),
      provider: 'Mentor',
      providerStyle: 'secondary'
    }
  ];
};

export const load: PageServerLoad = async () => {
  try {
    const [tableContent, analytics] = await Promise.all([
      fetchTableContent(),
      fetchAnalyticsData(),
    ]);

    return {
      tableContent,
      analytics
    };

  } catch (error) {
    // TODO: HANDLE ERRORS
    console.error(error)
  }
};