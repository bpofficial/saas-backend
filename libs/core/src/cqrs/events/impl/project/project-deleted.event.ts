import { IEvent } from '@nestjs/cqrs';
import { ProjectEntity } from '@server/repository';

export class ProjectDeletedEvent implements IEvent {
  constructor(public readonly project: ProjectEntity) {}
}
