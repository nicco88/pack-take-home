import type { RowT, } from "$lib/models/table.models";
import type { PageServerLoad } from "./$types";

const fetchTableContent = async (): Promise<RowT[]> => {
  return Array.from({length: 10}).map((_, i) => ({
    id: i,
    title: "Content Title Placeholder",
    path: "Mentoring Path",
    viewCount: 100,
    uploadedBy: "Name Surname",
    provider: "Content Provider",
    providerStyle: 'default',
    type: "Content Type",
    typeStyle: "default"
  }) as RowT);
};

export const load: PageServerLoad = async () => {
  try {
    const [tableContent] = await Promise.all([
      fetchTableContent(),
    ]);

    return {
      tableContent,
    };

  } catch (error) {
    // TODO: HANDLE ERRORS
    console.error(error)
  }
};