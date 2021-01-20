import { ICommand } from '@nestjs/cqrs';
import { ProjectRepository, UserEntity } from '@server/repository';
import { DeleteProjectRequest } from '@server/proto-schema/project';

export class DeleteProjectCommand implements ICommand {
    constructor(
        public readonly input: DeleteProjectRequest,
        public readonly user: UserEntity,
        public readonly projectRepository: ProjectRepository,
    ) {
    }
}
