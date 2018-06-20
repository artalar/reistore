import { IInstruction } from "./IInstruction";
import { IInstructor } from "./IInstructor";
import { IPath } from "./IPath";
import { ITransformer } from "./ITransformer";
import { IUpdateHandler } from "./IUpdateHandler";
import { IScope } from "./IScope";

export type ValueSelector<TModel, TValue> = (state: TModel) => TValue;
export type IsInstruction<TModel> = <TValue>(selector: IPath<TModel, TValue>) => boolean;
export type Transformator<TState, T> = (instruction: IInstruction<TState, any>, is: IsInstruction<TState>, transformer: ITransformer<TState>, state: T) => void;

export interface IStore<TState, TModel> {
    state: TModel;
    instructor: IInstructor<TState>;
    transformator?: Transformator<TState, TModel>;
    updateHandler: IUpdateHandler;
    addScope(scope: IScope<TState, TModel, any>);
    removeScope(scope: IScope<TState, TModel, any>);
    transform(instructins: IterableIterator<IInstruction<TState, any>>): IterableIterator<IInstruction<TState, any>>;
    update(instructins: IterableIterator<IInstruction<TState, any>>);
}
