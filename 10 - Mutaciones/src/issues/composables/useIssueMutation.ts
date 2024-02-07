import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { Issue } from '../interfaces/issue';
import { githubApi } from '../../api/githubApi';

interface Args {
  title: string;
  labels?: string[];
  body?: string;
}

const addIssue =  async({ title, body = '', labels = [] }: Args ):Promise<Issue> => {

  const newIssueData ={ title, body, labels };

  const { data } = await githubApi.post<Issue>('/issues', newIssueData );
  console.log({DataFromGithub: data})
  return data;

}


const useIssueMutation = () => {

    const queryClient = useQueryClient();

    const issueMutation = useMutation( addIssue, {
      onSuccess:( issue ) =>  {

        queryClient.invalidateQueries({
          queryKey: ['issues'],
          exact: false,
        });

        queryClient.refetchQueries(
          ['issues'],
          {
            exact: false,
          }
        );

        queryClient.setQueryData(
          ['issue', issue.number ],
          issue
        );

      },
      onSettled:() => {
        // Cuando termina con error o successs
      }
    })



    return {
      issueMutation
    }
}

export default useIssueMutation;

