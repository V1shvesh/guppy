// @flow

export type Field = 'projectName' | 'projectType' | 'projectIcon';
export type BuildStep =
  | 'initializing'
  | 'creatingParentDirectory'
  | 'installingCliTool'
  | 'creatingProjectDirectory'
  | 'installingDependencies';

export type Status = 'filling-in-form' | 'building-project' | 'project-created';

export type Step = Field | BuildStep;
