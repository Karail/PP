import { Request, Response } from 'express';
import moment from 'moment';
// Decorators
import { Bind } from '../../shared/decorators';
// Dto
import { TeacherDisciplineGroupCreateDto, TeacherDisciplineGroupEditDto } from '../dto';
// Schemas
import { TeacherDisciplineGroup } from '../schemas';
import { Teacher } from '../../teachers/schemas';
import { Discipline } from '../../disciplines/schemas';
import { Group } from '../../groups/schemas';
// Logger
import { logger } from '../../app.logger';

class TeacherDisciplineGroupController {

	constructor(
		private readonly teacherDisciplineGroupModel: typeof TeacherDisciplineGroup,
		private readonly teacherModel: typeof Teacher,
		private readonly disciplineModel: typeof Discipline,
		private readonly groupModel: typeof Group,
	) { }

	@Bind
	public async findAll(req: Request, res: Response) {
		try {
			const items = await this.teacherDisciplineGroupModel.find().lean();

			const data = [];

			for (const item of items) {

				const teachers = await this.teacherModel.findById(item.teacherId).lean();
				const disciplines = await this.disciplineModel.findById(item.disciplineId).lean();
				const groups = await this.groupModel.findById(item.groupId).lean();

				data.push({
					teachers,
					disciplines,
					groups
				})
			}

			res.json(data); 

		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async create(req: Request, res: Response) {
		try {
			const { teacherId, 
					disciplineId, 
					groupId, 
					lecturesWatch, 
					practicesWatch,
					laboratoryWatch,
					seminarsWatch,
					courseProjectsWatch,
					intermediateСertificationWatch,
					individualProjectWatch } = req.body as TeacherDisciplineGroupCreateDto;
			
			const teachers = await this.teacherModel.findById(teacherId).lean();
			const disciplines = await this.disciplineModel.findById(disciplineId).lean();
			const groups = await this.groupModel.findById(groupId).lean();

			if (!teachers || !disciplines || !groups) {
				return res.status(400).send({ message: 'The teachers or disciplines or groups is not found' });
			}

			const items = await this.teacherDisciplineGroupModel.create({ 
				teacherId, 
				disciplineId, 
				groupId, 
				lecturesWatch, 
				practicesWatch,
				laboratoryWatch,
				seminarsWatch,
				courseProjectsWatch,
				intermediateСertificationWatch,
				individualProjectWatch 
			});

			res.json(items);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async editMany(req: Request, res: Response) {
		try {

			const { items } = req.body as TeacherDisciplineGroupEditDto;
			
			const udpateMany = [];

			for (const item of items) {

				const data = this.teacherDisciplineGroupModel.updateOne({
					_id: item._id
				}, {
					teacherId: item.teacherId, 
					disciplineId: item.disciplineId, 
					groupId: item.groupId, 
					lecturesWatch: item.lecturesWatch, 
					practicesWatch: item.practicesWatch,
					laboratoryWatch: item.laboratoryWatch,
					seminarsWatch: item.seminarsWatch,
					courseProjectsWatch: item.courseProjectsWatch,
					intermediateСertificationWatch: item.intermediateСertificationWatch,
					individualProjectWatch: item.individualProjectWatch
				});

				udpateMany.push(data);
			}

			res.json(await Promise.all(udpateMany));
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;

			const note = await this.teacherDisciplineGroupModel.findOne({ _id: id }).lean();

			if (!note) {
				return res.status(400).send({ message: 'The teacher-discipline-group is not found' });
			}

			const result = await this.teacherDisciplineGroupModel.deleteOne({ _id: id }).lean();

			res.json(result);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
}

export const teacherDisciplineGroupController = new TeacherDisciplineGroupController(TeacherDisciplineGroup, Teacher, Discipline, Group);