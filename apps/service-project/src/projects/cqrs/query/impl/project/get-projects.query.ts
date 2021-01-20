import { IQuery } from '@nestjs/cqrs';
import { ProjectRepository } from '@server/repository';
import { FindProjectsRequest } from '@server/proto-schema/project';

export class GetProjectsQuery implements IQuery {
    constructor(
        public readonly projectRepository: ProjectRepository,
        public readonly input?: FindProjectsRequest,
    ) {
    }
}
