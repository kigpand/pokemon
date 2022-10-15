export function getColor(type: string) {
    if (type === 'water') return '#5ec4ff';
    if (type === 'grass') return '#3aff6b';
    if (type === 'poison') return '#b639ff';
    if (type === 'fire') return '#ff0000';
    if (type === 'normal') return '#888888';
    if (type === 'electric') return '#fff34a';
    if (type === 'ice') return '#42f9ff';
    if (type === 'fighting') return '#b15429';
    if (type === 'ground') return '#b46c00';
    if (type === 'flying') return '#1f66ff';
    if (type === 'psychic') return '#fa51b3';
    if (type === 'bug') return '#257439';
    if (type === 'rock') return '#977f13';
    if (type === 'ghost') return '#5e379e';
    if (type === 'dragon') return '#4251aa';
    if (type === 'dark') return '#584a30';
    if (type === 'steel') return '#797979';
    if (type === 'fairy') return '#ff35b2';
}

export function getTypeKo(type: string) {
    if (type === 'water') return '물';
    if (type === 'grass') return '풀';
    if (type === 'poison') return '독';
    if (type === 'fire') return '불';
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
    return 'normal';
}

export function getTypeConvertData(typeInfo: string) {
    const array: string[] = typeInfo.split(',');
    if (array.length > 0 && array[0] !== '') {
        return array.map((arr: string) => {
            return getTypeKo(arr);
        });
    }
    
    return null;
}