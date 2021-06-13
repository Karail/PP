import { Request, Response } from 'express';
import moment from 'moment';
// Decorators
import { Bind } from '../../shared/decorators';
// Dto
import { SpecializationCreateDto, } from '../dto';
// Schemas
import { Specialization } from '../schemas';
// Logger
import { logger } from '../../app.logger';

class SpecializationController {

	constructor(
		private readonly specializationModel: typeof Specialization,
	) { }

	@Bind
	public async findOne(req: Request, res: Response) {
		try {

			const { id } = req.params;

			const notes = await this.specializationModel.findOne({ _id: id }).lean();

			res.json(notes);

		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async findAll(req: Request, res: Response) {
		try {
			const notes = await this.specializationModel.find().lean();

			res.json(notes);

		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async create(req: Request, res: Response) {
		try {
			const { name, code } = req.body as SpecializationCreateDto;

			const note = await this.specializationModel.create({ name, code });

			res.json(note);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async edit(req: Request, res: Response) {
		try {
			const { name, code } = req.body as SpecializationCreateDto;

			const { id } = req.params;

			const note = await this.specializationModel.updateOne({ _id: id }, { name, code });

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

			const note = await this.specializationModel.findOne({ _id: id }).lean();

			if (!note) {
				return res.status(400).send({ message: 'The specialization is not found' });
			}

			const result = await this.specializationModel.deleteOne({ _id: id }).lean();

			res.json(result);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
}

export const specializationController = new SpecializationController(Specialization);