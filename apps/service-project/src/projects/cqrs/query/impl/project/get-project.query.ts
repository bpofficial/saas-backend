import { IQuery } from '@nestjs/cqrs';
import { ProjectRepository } from '@server/repository';
import { ReadProjectRequest } from '@server/proto-schema/project';

export class GetProjectQuery implements IQuery {
    constructor(
        public readonly input: ReadProjectRequest,
        public readonly projectRepository: ProjectRepository,
    ) {
    }
}
