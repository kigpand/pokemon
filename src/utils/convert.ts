import { IServerType } from '../interface/IServerType';

export function getColor(type: string) {
    if (type === 'water' || type === '물') return '#5ec4ff';
    if (type === 'grass' || type === '풀') return '#3aff6b';
    if (type === 'poison' || type === '독') return '#b639ff';
    if (type === 'fire' || type === '불꽃') return '#ff0000';
    if (type === 'normal' || type === '노말') return '#888888';
    if (type === 'electric' || type === '전기') return '#e7dc37';
    if (type === 'ice' || type === '얼음') return '#42f9ff';
    if (type === 'fighting' || type === '격투') return '#b15429';
    if (type === 'ground' || type === '땅') return '#b46c00';
    if (type === 'flying' || type === '비행') return '#1f66ff';
    if (type === 'psychic' || type === '에스퍼') return '#fa51b3';
    if (type === 'bug' || type === '벌레') return '#257439';
    if (type === 'rock' || type === '바위') return '#977f13';
    if (type === 'ghost' || type === '고스트') return '#5e379e';
    if (type === 'dragon' || type === '드래곤') return '#4251aa';
    if (type === 'dark' || type === '악') return '#584a30';
    if (type === 'steel' || type === '강철') return '#797979';
    if (type === 'fairy' || type === '페어리') return '#ff35b2';
}

export function getLineColor(type: string) {
    if (type === 'water' || type === '물') return '#33b4ff';
    if (type === 'grass' || type === '풀') return '#19df4b';
    if (type === 'poison' || type === '독') return '#871dc5';
    if (type === 'fire' || type === '불꽃') return '#b60000';
    if (type === 'normal' || type === '노말') return '#5a5a5a';
    if (type === 'electric' || type === '전기') return '#e4d72a';
    if (type === 'ice' || type === '얼음') return '#24dfe6';
    if (type === 'fighting' || type === '격투') return '#973e15';
    if (type === 'ground' || type === '땅') return '#794b05';
    if (type === 'flying' || type === '비행') return '#194ec0';
    if (type === 'psychic' || type === '에스퍼') return '#f52ba1';
    if (type === 'bug' || type === '벌레') return '#145a26';
    if (type === 'rock' || type === '바위') return '#816f1d';
    if (type === 'ghost' || type === '고스트') return '#3d1877';
    if (type === 'dragon' || type === '드래곤') return '#434e8b';
    if (type === 'dark' || type === '악') return '#383020';
    if (type === 'steel' || type === '강철') return '#444444';
    if (type === 'fairy' || type === '페어리') return '#ff18a7';
}

export function getTypeKo(type: string) {
    if (type === 'water') return '물';
    if (type === 'grass') return '풀';
    if (type === 'poison') return '독';
    if (type === 'fire') return '불꽃';
    if (type === 'normal') return '노말';
    if (type === 'electric') return '전기';
    if (type === 'ice') return '얼음';
    if (type === 'fighting') return '격투';
    if (type === 'ground') return '땅';
    if (type === 'flying') return '비행';
    if (type === 'psychic') return '에스퍼';
    if (type === 'bug') return '벌레';
    if (type === 'rock') return '바위';
    if (type === 'ghost') return '고스트';
    if (type === 'dragon') return '드래곤';
    if (type === 'dark') return '악';
    if (type === 'steel') return '강철';
    if (type === 'fairy') return '페어리';
    return '노말';
}

export function getStatList(stat: string) {
    const items = stat.split(',');
    const splitItems = items.map((item) => {
        if (item === 'hp') return 'HP';
        if (item === 'attack') return '공격';
        if (item === 'defense') return '방어';
        if (item === 'special-attack') return '특수공격';
        if (item === 'special-defense') return '특수방어';
        if (item === 'speed') return '스피드';
        return item;
    });
    const stateItem = [];
    const allCount = Number(splitItems[1]) + Number(splitItems[3]) + Number(splitItems[5]) + Number(splitItems[7]) + Number(splitItems[9]) + Number(splitItems[11]);
    stateItem.push({ name : splitItems[0], stat: Number(splitItems[1])});
    stateItem.push({ name : splitItems[2], stat: Number(splitItems[3])});
    stateItem.push({ name : splitItems[4], stat: Number(splitItems[5])});
    stateItem.push({ name : splitItems[6], stat: Number(splitItems[7])});
    stateItem.push({ name : splitItems[8], stat: Number(splitItems[9])});
    stateItem.push({ name : splitItems[10], stat: Number(splitItems[11])});
    stateItem.push({ name: '총합', stat: allCount });
    return stateItem;
}

export function getTypeConvertData(typeInfo: string) {
    const array: string[] = typeInfo.split(',');
    if (array.length > 0 && array[0] !== '') {
        return array.map((arr: string) => {
            return arr;
        });
    }
    
    return null;
}

export function typeConvertDamegeData(typeData: IServerType) {
    const name = getTypeKo(typeData.name);
    const doubleFrom = typeData.doubleDamegeFrom !== '' ? typeData.doubleDamegeFrom.split(',').map((v: string) => { return getTypeKo(v)}) : null;
    const doubleTo = typeData.doubleDamegeTo !== '' ? typeData.doubleDamegeTo.split(',').map((v: string) => { return getTypeKo(v)}) : null;
    const halfFrom = typeData.halfDamegeFrom !== '' ? typeData.halfDamegeFrom.split(',').map((v: string) => { return getTypeKo(v)}) : null;
    const halfTo = typeData.halfDamegeTo !== '' ? typeData.halfDamegeTo.split(',').map((v: string) => { return getTypeKo(v)}) : null;
    const noFrom = typeData.noDamegeFrom !== '' ? typeData.noDamegeFrom.split(',').map((v: string) => { return getTypeKo(v)}) : null;
    const noTo = typeData.noDamegeTo !== '' ? typeData.noDamegeTo.split(',').map((v: string) => { return getTypeKo(v)}) : null;

    return { name, doubleFrom, doubleTo, halfFrom, halfTo, noFrom, noTo };
}
