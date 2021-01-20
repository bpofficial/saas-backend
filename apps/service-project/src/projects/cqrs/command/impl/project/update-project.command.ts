import { ICommand } from '@nestjs/cqrs';
import { ProjectRepository, UserEntity } from '@server/repository';
import { UpdateProjectRequest } from '@server/proto-schema/project';

export class UpdateProjectCommand implements ICommand {
    constructor(
        public readonly input: UpdateProjectRequest,
        public readonly user: UserEntity,
        public readonly projectRepository: ProjectRepository,
    ) {
    }
}
