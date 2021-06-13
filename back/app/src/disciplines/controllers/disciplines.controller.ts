import { Request, Response } from 'express';
import moment from 'moment';
// Decorators
import { Bind } from '../../shared/decorators';
// Dto
import { DisciplineCreateDto, } from '../dto';
// Schemas
import { Discipline } from '../schemas';
// Logger
import { logger } from '../../app.logger';

class DisciplineController {

	constructor(
		private readonly disciplineModel: typeof Discipline,
	) { }

	@Bind
	public async findOne(req: Request, res: Response) {
		try {

			const { id } = req.params;

			const notes = await this.disciplineModel.findOne({ _id: id }).lean();

			res.json(notes);

		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async findAll(req: Request, res: Response) {
		try {
			const notes = await this.disciplineModel.find().lean();

			res.json(notes);

		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async create(req: Request, res: Response) {
		try {
			const { name,
				index,
				lecturesWatch,
				practicesWatch,
				laboratoryWatch,
				seminarsWatch,
				courseProjectsWatch,
				intermediateСertificationWatch,
				individualProjectWatch } = req.body as DisciplineCreateDto;

			const note = await this.disciplineModel.create({
				name,
				index,
				lecturesWatch,
				practicesWatch,
				laboratoryWatch,
				seminarsWatch,
				courseProjectsWatch,
				intermediateСertificationWatch,
				individualProjectWatch
			});

			res.json(note);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
	@Bind
	public async edit(req: Request, res: Response) {
		try {
			const { name,
				index,
				lecturesWatch,
				practicesWatch,
				laboratoryWatch,
				seminarsWatch,
				courseProjectsWatch,
				intermediateСertificationWatch,
				individualProjectWatch } = req.body as DisciplineCreateDto;

			const { id } = req.params;

			const note = await this.disciplineModel.updateOne({ _id: id }, {
				name,
				index,
				lecturesWatch,
				practicesWatch,
				laboratoryWatch,
				seminarsWatch,
				courseProjectsWatch,
				intermediateСertificationWatch,
				individualProjectWatch
			});

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

			const note = await this.disciplineModel.findOne({ _id: id }).lean();

			if (!note) {
				return res.status(400).send({ message: 'The discipline is not found' });
			}

			const result = await this.disciplineModel.deleteOne({ _id: id }).lean();

			res.json(result);
		} catch (ex) {
			logger.error(ex.message);
			res.status(500).send(ex);
		}
	}
}

export const disciplineController = new DisciplineController(Discipline);