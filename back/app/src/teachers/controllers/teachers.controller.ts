import { Request, Response } from 'express';
import moment from 'moment';
// Decorators
import { Bind } from '../../shared/decorators';
// Dto
import { TeacherCreateDto } from '../dto';
// Schemas
import { Teacher } from '../schemas';
// Logger
import { logger } from '../../app.logger';

class TeacherController {

	constructor(
		private readonly teacherModel: typeof Teacher,
	) { }

	@Bind
	public async findOne(req: Request, res: Response) {
		try {

			const { id } = req.params;

			const notes = await this.teacherModel.findOne({ _id: id }).lean();

			res.json(notes);

		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async findAll(req: Request, res: Response) {
		try {
			const notes = await this.teacherModel.find().lean();

			res.json(notes);

		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async create(req: Request, res: Response) {
		try {
			const { surname, name, patronymic } = req.body as TeacherCreateDto;

			const note = await this.teacherModel.create({ surname, name, patronymic });

			res.json(note);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async edit(req: Request, res: Response) {
		try {
			const { surname, name, patronymic } = req.body as TeacherCreateDto;

			const { id } = req.params;

			const note = await this.teacherModel.updateOne({ _id: id }, { surname, name, patronymic });

			res.json(note);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;

			const note = await this.teacherModel.findOne({ _id: id }).lean();

			if (!note) {
				return res.status(400).send({ message: 'The teacher is not found' });
			}

			const result = await this.teacherModel.deleteOne({ _id: id }).lean();

			res.json(result);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
}

export const teacherController = new TeacherController(Teacher);