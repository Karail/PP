import { Request, Response } from 'express';
import moment from 'moment';
// Decorators
import { Bind } from '../../shared/decorators';
// Dto
import { GroupCreateDto, } from '../dto';
// Schemas
import { Group } from '../schemas';
// Logger
import { logger } from '../../app.logger';

class GroupController {

	constructor(
		private readonly groupModel: typeof Group,
	) { }

	@Bind
	public async findOne(req: Request, res: Response) {
		try {

			const { id } = req.params;

			const notes = await this.groupModel.findOne({ _id: id }).lean();

			res.json(notes);

		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async findAll(req: Request, res: Response) {
		try {
			const notes = await this.groupModel.find().lean();

			res.json(notes);

		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async create(req: Request, res: Response) {
		try {
			const { name, index, course, quantity } = req.body as GroupCreateDto;

			const note = await this.groupModel.create({ name, index, course, quantity });

			res.json(note);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async edit(req: Request, res: Response) {
		try {
			const { name, index, course, quantity } = req.body as GroupCreateDto;

			const { id } = req.params;

			const note = await this.groupModel.updateOne({ _id: id }, { name, index, course, quantity });

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

			const note = await this.groupModel.findOne({ _id: id }).lean();

			if (!note) {
				return res.status(400).send({ message: 'The group is not found' });
			}

			const result = await this.groupModel.deleteOne({ _id: id }).lean();

			res.json(result);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
}

export const groupController = new GroupController(Group);